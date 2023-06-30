import "./Project.css";
import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="project-content">
      <div className="projectcontainer">
        <h1>PROJECTS</h1>
      </div>
      <div className="project-wrapper">
        <div className="project1">
          <img
            src="https://img.freepik.com/premium-vector/facial-recognition-line-icon-biometric-face-scanning_116137-6905.jpg"
            alt="proj1"
          ></img>
          <div className="projectsrc">
            <Link to="/project" className="btn1">
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Transforming Attendance Monitoring System</h1>
            <p>Machine Learning</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://thumbs.dreamstime.com/b/email-vires-protection-outline-icon-elements-security-neon-style-icons-simple-websites-web-design-mobile-app-info-188760138.jpg"
            alt="proj2"
          />
          <div className="projectsrc">
            <Link to="/project" className="btn1">
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Spam Email Detection</h1>
            <p>Machine Learning</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://thumbs.dreamstime.com/b/email-vires-protection-outline-icon-elements-security-neon-style-icons-simple-websites-web-design-mobile-app-info-188760138.jpg"
            alt="proj2"
          />
          <div className="projectsrc">
            <Link to="/project" className="btn1">
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Spam Email Detection</h1>
            <p>Machine Learning</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://thumbs.dreamstime.com/b/email-vires-protection-outline-icon-elements-security-neon-style-icons-simple-websites-web-design-mobile-app-info-188760138.jpg"
            alt="proj2"
          />
          <div className="projectsrc">
            <Link to="/project" className="btn1">
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Spam Email Detection</h1>
            <p>Machine Learning</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://img.freepik.com/premium-vector/facial-recognition-line-icon-biometric-face-scanning_116137-6905.jpg"
            alt="proj3"
          />
          <div className="projectsrc">
            <Link to="/project" className="btn1">
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Transforming Attendance Monitoring System</h1>
            <p>Machine Learning</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://img.freepik.com/premium-vector/facial-recognition-line-icon-biometric-face-scanning_116137-6905.jpg"
            alt="proj4"
          />
          <div className="projectsrc">
            <Link to="/project" className="btn1">
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Transforming Attendance Monitoring System</h1>
            <p>Machine Learning</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://img.freepik.com/premium-vector/facial-recognition-line-icon-biometric-face-scanning_116137-6905.jpg"
            alt="proj5"
          />
          <div className="projectsrc">
            <Link to="/project" className="btn1">
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Transforming Attendance Monitoring System</h1>
            <p>Machine Learning</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://img.freepik.com/premium-vector/facial-recognition-line-icon-biometric-face-scanning_116137-6905.jpg"
            alt="proj6"
          />
          <div className="projectsrc">
            <Link to="/project" className="btn1">
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Transforming Attendance Monitoring System</h1>
            <p>Machine Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
