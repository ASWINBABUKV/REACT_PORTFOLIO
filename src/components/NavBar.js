import "./navbarstyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/home">
        <h1>Portfolio</h1>
      </Link>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <FaBars size={20} style={{ color: "#fff" }} />
      </div>
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="#home">Home</Link>
        </li>
        <li>
          <Link to="#project-content">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
