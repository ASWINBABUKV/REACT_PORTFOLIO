import React, { useState } from "react";
import "./About.css";
const About = () => {
  const [activeTab, setActiveTab] = useState("Interest");

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
            className={activeTab === "Interest" ? "active" : ""}
            onClick={() => handleTabClick("Interest")}
          >
            Interest
          </button>
          <button
            className={activeTab === "Home" ? "active" : ""}
            onClick={() => handleTabClick("Home")}
          >
            Home
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
              <div class="box2">
                <div class="content">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2WQJHN0YuGtcJNL2dKNvATdwfjPcE7ghD6VyYVtvX5yALq8JuczLEaTBZHtdzE-meP8&usqp=CAU"
                    alt="Home"
                    class="home-image"
                  />
                  <div class="location">
                    <p>KANNUR, KERALA, INDIA</p>
                    <a
                      href="https://goo.gl/maps/Jdyned8rnNYbAkTR7"
                      target="_blank"
                      class="map-button"
                      rel="noreferrer"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Interest" && (
            <div>
              <div class="container">
                <div class="column">
                  <h3>Technical</h3>
                  <ul>
                    <li className="Box1">Web Development</li>
                    <li className="Box1">Machine Learning</li>
                    <li className="Box1">Artificial Intelligence</li>
                    <li className="Box1">Competitive Programming</li>
                  </ul>
                </div>
                <div class="column">
                  <h3>Non-Technical</h3>
                  <ul>
                    <li className="Box1">Cricket</li>
                    <li className="Box1"> Football</li>
                    <li className="Box1">NCC</li>
                    <li className="Box1">Scout and Guides</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
