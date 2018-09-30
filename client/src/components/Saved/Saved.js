import React from "react";
import "./Saved.css"

const Saved = (props) => {
  const date = props.date && props.date.slice(0, 10);

  return (
    <div className="card">
      <div className="card-body" id="article-section">
        <a href={props.url}><h5 className="card-title" id={props._id}>{props.title}</h5></a>
        <h6 className="card-text">{date}</h6>
        <span className="btn-group pull-right">
          <button className="btn btn-danger delete" onClick={(event) => props.handleDeleteButton(event, props._id)}>Remove Article</button>
        </span>
      </div>
    </div>
  )
};

export default Saved;

