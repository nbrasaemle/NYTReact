import React, { Component } from "react";
import "./Search.css"
import { Input } from "../Form";
import API from "../../utils/API"
import Results from "../../components/Results";
import Saved from "../../components/Saved";

const styles = {
  backgroundColor: `black`
}

class Search extends Component {
  state = {
    article: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  }

  componentDidMount() {
    this.getSavedArticles()
  }

  handleSaveButton = (event, id) => {
    event.preventDefault();
    console.log(event);
    console.log(id);
    const articleData = this.state.articles.find(article => article._id === id);
    console.log(articleData);
    API.savedArticles({ articleData })
      .then((results) => {
        const filterResults = this.state.articles.filter(article => article._id !== id);
        console.log(filterResults);
        this.setState({ articles: filterResults });
        this.getSavedArticles();
      });
  };
  getSavedArticles = () => {
    API.getArticles()
      .then((res) => {
        console.log(res.data)
        this.setState({ saved: res.data });
      });
  };
  // get
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("HANDLE FORM SUBMIT WORKS");
    if (this.state.article && this.state.startYear && this.state.endYear) {
      API.searchNYT(this.state.article, this.state.startYear, this.state.endYear)
        .then((res) => {
          // console.log(res.data.response)
          this.setState({ articles: res.data.response.docs });
          console.log("this.state.articles: ", this.state.articles);
        })

        .catch(err => console.log(err));
    }
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDeleteButton = (event, id) => {
    event.preventDefault();
    console.log(id);
    API.deleteArticle(id)
      .then((results) => {
        console.log(results);
        this.getSavedArticles();
      });
  };

  render() {
    return (
      <div style={styles}>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <br />
            <div className="card">
              <div className="card-header label">
                  <i className="fa fa-list-alt"></i> Search for Articles
              </div>
              <div className="card-body">
                <form>
                  <Input
                    value={this.state.article}
                    onChange={this.handleInputChange}
                    name="article"
                    placeholder="Article"
                  />
                  <Input
                    value={this.state.startYear}
                    onChange={this.handleInputChange}
                    name="startYear"
                    placeholder="Start Year"
                    type="text"
                  />
                  <Input
                    value={this.state.endYear}
                    onChange={this.handleInputChange}
                    name="endYear"
                    placeholder="End Year"
                    type="text"
                  />
                  <button type="submit" onClick={this.handleFormSubmit} className="btn btn-secondary margin-right" id="run-search">
                    <i className="fa fa-search"></i> Search</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <br />
            <div className="card">
              <div className="card-header label">
               <i className="fa fa-table"></i> Results:
              </div>
              {this.state.articles.map(article => (
                <Results
                  url={article.web_url}
                  title={article.headline.main}
                  date={article.pub_date}
                  key={article._id}
                  id={article._id}
                  handleSaveButton={this.handleSaveButton}
                />
              ))}
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <br />
            <div className="card">

              <div className="card-header label">
                
                  <i className="fa fa-table"></i> Saved Articles: 
              </div>
              {this.state.saved.map(savedArticles => (
              <Saved
                title = {savedArticles.title}
                url = {savedArticles.url}
                date = {savedArticles.date}
                key = {savedArticles._id}
                _id = {savedArticles._id}
                handleDeleteButton = {this.handleDeleteButton}
              />
              ))}
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    )
  }
};

export default Search;