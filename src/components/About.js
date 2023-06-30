import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="About-content" id="about">
      <div className="aboutheader">
        <h1>About</h1>
      </div>
      <div className="aboutcontainer">
        <div className="box">
          {/* Your content goes here */}
          <h1>Box Content</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
