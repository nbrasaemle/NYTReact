import axios from "axios";

export default {
  searchNYT: function(article, startYear, endYear) {
    const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ca08358f1bae4e328d1ee3fb929b5120&q=${article}&begin_date=${startYear}0101&end_date=${endYear}0101&page=5`;
    return axios.get(queryUrl);
  },
getArticles: function() {
  return axios.get("/api/articles");
},
savedArticles: function(articleData){
  console.log(articleData.articleData._id);
return axios.post("/api/articles", {
title: articleData.articleData.headline.main,
url: articleData.articleData.web_url,
date: articleData.articleData.pub_date
})
.then((response) => {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
},
deleteArticle: function (id) {
  console.log(id);
  return axios.delete("/api/articles/" + id);
}

};


// old code from books activity
// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };