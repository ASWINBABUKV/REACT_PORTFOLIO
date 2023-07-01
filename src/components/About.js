import React, { useState } from "react";
import "./About.css";
const About = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="About-content" id="about">
      <div className="aboutheader">
        <h1>About</h1>
      </div>
      <div className="box">
        <div className="buttons">
          <button
            className={activeTab === "Education" ? "active" : ""}
            onClick={() => handleTabClick("Education")}
          >
            Education
          </button>
          <button
            className={activeTab === "Home" ? "active" : ""}
            onClick={() => handleTabClick("Home")}
          >
            Home
          </button>
          <button
            className={activeTab === "Interest" ? "active" : ""}
            onClick={() => handleTabClick("Interest")}
          >
            Interest
          </button>
        </div>
        <div className="content">
          {activeTab === "Education" && <h2>Education Content</h2>}
          {activeTab === "Home" && <h2>Home Content</h2>}
          {activeTab === "Interest" && <h2>Interest Content</h2>}
        </div>
      </div>
    </div>
  );
};

export default About;
