import React from "react";
import "./Results.css"

const Results = props => (

          <div className="card-body" >
          <a href= {props.url}><h5>{props.title}</h5></a>
          <p>{props.date}</p>
          <span className="btn-group pull-right"><button className="btn btn-primary" onClick={() => props.handleSaveButton(props.id)}>Save Article</button></span>
          </div>
)
export default Results;