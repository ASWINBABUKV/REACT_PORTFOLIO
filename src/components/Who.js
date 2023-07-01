import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import "./Who.css";
import { Link } from "react-router-dom";
const Who = () => {
  const handleIconClick = (link) => {
    window.open(link, "_blank");
  };
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
        <div className="icons">
          <FaFacebook
            onClick={() =>
              handleIconClick(
                "https://www.facebook.com/profile.php?id=100025575593702"
              )
            }
          />
          <FaTwitter
            onClick={() =>
              handleIconClick("https://twitter.com/ASWINBABUKV1?s=08")
            }
          />
          <FaLinkedin
            onClick={() =>
              handleIconClick("https://www.linkedin.com/in/aswin-babu-kv")
            }
          />
          <FaGithub
            onClick={() => handleIconClick("https://github.com/ASWINBABUKV")}
          />
          <FaInstagram
            onClick={() =>
              handleIconClick("https://www.instagram.com/__aswin_11_/")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Who;
