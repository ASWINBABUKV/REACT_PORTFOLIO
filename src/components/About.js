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
          {activeTab === "Education" && (
            <div>
              <div className="education-container">
                <div className="education-item">
                  <h3>Bachelor of Technology [CSE]</h3>
                  <p>[AMRITA VISHWA VIDYAPEETHAM]</p>
                </div>
                <div className="education-item">
                  <h3>Senior Secondary Education [GRADE 12]</h3>
                  <p>[JAWAHAR NOVADAYA VIDYALAYA, MAHE]</p>
                </div>
                <div className="education-item">
                  <h3>Secondary School [GRADE 10]</h3>
                  <p>[JAWAHAR NOVADAYA VIDYALAYA, MAHE]</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Home" && (
            <div>
              <h2>Home Content</h2>
              <p>Location: [Your Location]</p>
            </div>
          )}
          {activeTab === "Interest" && (
            <div>
              <h2>Interest Content</h2>
              <div>
                <h3>Technical</h3>
                <ul>
                  <li>Web Development</li>
                  <li>Machine Learning</li>
                  <li>Data Science</li>
                </ul>
              </div>
              <div>
                <h3>Non-Technical</h3>
                <ul>
                  <li>Cricket</li>
                  <li>Football</li>
                  <li>NCC</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
