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
            src="https://t4.ftcdn.net/jpg/05/61/19/97/360_F_561199741_KaWqjk79M5PGcPkOBaShLqXSsTJp9BmR.jpg"
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
            src="https://blog.ipleaders.in/wp-content/uploads/2020/08/fake-news-1024x768-1.jpg"
            alt="proj2"
          />
          <div className="projectsrc">
            <Link
              to="https://github.com/ASWINBABUKV/FAKE_NEWS_DETECTION.git"
              target="_blank"
              className="btn1"
            >
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Fake News Detection</h1>
            <p>ML/Network Analysis</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://www.ict.eu/sites/corporate/files/images/ICTGroup-TopDesk%20Touch%20digital%20screen-1115581565_edit%20copy%20%281%29_3.jpg"
            alt="proj2"
          />
          <div className="projectsrc">
            <Link
              to="https://github.com/ASWINBABUKV/ICT_SERVICE_MANAGEMENT.git"
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
            src="https://rukminim2.flixcart.com/image/850/1000/jtiz0cw0/book/3/3/9/i-am-not-i-who-am-i-original-imafess2n5j3jtxh.jpeg?q=90"
            alt="proj2"
          />
          <div className="projectsrc">
            <Link
              to="https://github.com/ASWINBABUKV/portfolio.git"
              target="_blank"
              className="btn1"
            >
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Portfolio</h1>
            <p>React</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://st3.depositphotos.com/10904808/13566/v/600/depositphotos_135665992-stock-illustration-connectivity-concept-connected-devices-over.jpg"
            alt="proj3"
          />
          <div className="projectsrc">
            <Link
              to="https://github.com/ASWINBABUKV/PARALLIZATION_OF_FLOYD_WARSHALL_ALGORITHM_USING_MPI.git"
              target="_blank"
              className="btn1"
            >
              VIEW SRC
            </Link>
          </div>
          <div className="project-overlay">
            <h1>Parallelization of Floyd Warshall Algorithm using MPI</h1>
            <p>Distributed Systems</p>
          </div>
        </div>
        <div className="project1">
          <img
            src="https://i0.wp.com/www.zigsaw.in/jobs/wp-content/uploads/2020/06/hire-4740315_1920.jpg?fit=1920%2C1920&ssl=1"
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
            <h1>IntelliHire</h1>
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
              to="https://github.com/ASWINBABUKV/JOB_SEEKERS-PROJECT.git"
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
            src="https://media.istockphoto.com/id/1351605230/vector/real-estate-investment-or-property-growth-concept.jpg?s=612x612&w=0&k=20&c=c1RoIpXozoHzFdL0TzTE0scqSnyg5nz7fWVFK1SkVe0="
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
            <h1>House Price Prediction</h1>
            <p>Data Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
