import React from "react";
import "./Saved.css"

const Saved = (props) => {
  const date = props.date && props.date.slice(0, 10);

  return (
    <div className="card-body" id="article-section">
      <a href={props.url}><h5 id={props._id}>{props.title}</h5></a>
      <h6>{date}</h6>
      <span className="btn-group pull-right">
        <button className="btn btn-danger save" onClick={(event) => props.handleDeleteButton(event, props._id)}>Remove Article</button>
      </span>
    </div>
  )
};

export default Saved;