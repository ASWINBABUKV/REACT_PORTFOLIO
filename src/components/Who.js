import React from "react";
import "./Who.css";
import { Link } from "react-router-dom";
const Who = () => {
  return (
    <div className="profile" id="home">
      <div className="mask">
        <img
          className="intro-img"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/04d53f80577741.5cf8b5c84827c.gif"
          alt="Introimg"
        />
      </div>
      <div className="content">
        <h1>ASWIN BABU K V</h1>
        <p>WEB DEVELOPER</p>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Who;
