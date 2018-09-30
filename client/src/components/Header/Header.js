import React from "react";
import "./Header.css"
import Background from "../../images/elijah-hiett-298338-unsplash.jpg"

const style= {
    backgroundImage : `url(${Background})`,
    
}

const Header = () => (
  <div className="jumbotron" style={style}>
    <div className="container" >
        <span><i className="fas fa-newspaper"></i> <h1> New York Times</h1></span>
    </div>
    </div>
);

export default Header;