import React from "react";
import "./Results.css"


const Results = props => {
    const date = props.date && props.date.slice(0, 10);

    return (
        <div className="card">
        <div className="card-body" >
            <a href={props.url}><h5 className="card-title">{props.title}</h5></a>
            <h6 className="card-text">{date}</h6>
            <span className="btn-group pull-right">
            <button className="btn btn-success save" onClick={(event) => props.handleSaveButton(event, props.id)}><i class="fas fa-bookmark"> </i> Save Article</button>
            </span>
        </div>
        </div>
    )
}

export default Results;