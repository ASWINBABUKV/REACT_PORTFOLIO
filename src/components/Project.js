import "./Project.css";
import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="projectcontainer">
      <h1>PROJECTS</h1>
      <div className="project-wrapper">
        <div className="project1">
          <img
            src="https://img.freepik.com/premium-vector/facial-recognition-line-icon-biometric-face-scanning_116137-6905.jpg"
            alt="proj1"
          ></img>
          <div>
            <Link to="/project" className="btn">
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
            alt="proj2"
          />
          <div>
            <Link to="/project" className="btn">
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
          <div>
            <Link to="/project" className="btn">
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
          <div>
            <Link to="/project" className="btn">
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
          <div>
            <Link to="/project" className="btn">
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
          <div>
            <Link to="/project" className="btn">
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
