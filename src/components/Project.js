import "./Project.css";
import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="project-content" id="project">
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
            <Link
              to="https://github.com/ASWINBABUKV/SPAM_EMAIL_DETECTION.git "
              target="_blank"
              className="btn1"
            >
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
            src="https://blog.verisign.com/wp-content/uploads/VRSN_CompanyBrandedEmail_BlogImage8_201712-670x446.png"
            alt="proj2"
          />
          <div className="projectsrc">
            <Link
              to="https://github.com/ASWINBABUKV/SPAM_EMAIL_DETECTION.git "
              target="_blank"
              className="btn1"
            >
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
            src="https://www.ict.eu/sites/corporate/files/images/ICTGroup-TopDesk%20Touch%20digital%20screen-1115581565_edit%20copy%20%281%29_3.jpg"
            alt="proj2"
          />
          <div className="projectsrc">
            <Link
              to="https://github.com/ASWINBABUKV/SPAM_EMAIL_DETECTION.git "
              target="_blank"
              className="btn1"
            >
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>ICT Service Management</h1>
            <p>Java</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://assets-global.website-files.com/5fcff9094e6ad8e939c7fa3a/63a0cd919176545277812da9_CRM_%20Housing%20market%20predictions%202023.png"
            alt="proj2"
          />
          <div className="projectsrc">
            <Link
              to="https://github.com/ASWINBABUKV/SPAM_EMAIL_DETECTION.git "
              target="_blank"
              className="btn1"
            >
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Hpuse Price Prediction</h1>
            <p>Data Science</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://img.freepik.com/premium-vector/facial-recognition-line-icon-biometric-face-scanning_116137-6905.jpg"
            alt="proj3"
          />
          <div className="projectsrc">
            <Link
              to="https://github.com/ASWINBABUKV/SPAM_EMAIL_DETECTION.git "
              target="_blank"
              className="btn1"
            >
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
            <Link
              to="https://github.com/ASWINBABUKV/SPAM_EMAIL_DETECTION.git "
              target="_blank"
              className="btn1"
            >
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
            <Link
              to="https://github.com/ASWINBABUKV/SPAM_EMAIL_DETECTION.git "
              target="_blank"
              className="btn1"
            >
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
            <Link
              to="https://github.com/ASWINBABUKV/SPAM_EMAIL_DETECTION.git "
              target="_blank"
              className="btn1"
            >
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
