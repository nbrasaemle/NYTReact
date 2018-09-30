import React from "react";
import "./Results.css"


const Results = props => {
    const date = props.date && props.date.slice(0, 10);

    return (
        <div className="card-body" >
            <a href={props.url}><h5>{props.title}</h5></a>
            <h6>{date}</h6>
            <span className="btn-group pull-right">
            <button className="btn btn-primary save" onClick={(event) => props.handleSaveButton(event, props.id)}>Save Article</button>
            </span>
        </div>
    )
}

export default Results;