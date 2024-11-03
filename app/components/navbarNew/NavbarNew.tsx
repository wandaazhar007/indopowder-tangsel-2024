import React from "react";
import "./navbarNew.scss"; // Ensure this file exists for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbarContainer">
        <div className="navbarLogo">
          <a href="/" aria-label="TechCrunch Home">
            <h1>Indopowder</h1>
          </a>
        </div>
        <nav className="navbarLinks">
          <ul>
            <li><a href="#latest">About</a></li>
            <li><a href="#startups">Product</a></li>
            <li><a href="#venture">Faq's</a></li>
            <li><a href="#apple">Contact</a></li>
          </ul>
        </nav>
        <div className="navbarActions">
          <a href="#signin" className="navbarSignin" aria-label="Sign In">Sign In</a>
          <button className="navbarSearch" aria-label="Search">
            {/* <i className="fas fa-search"></i> */}
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="navbarMenu" aria-label="Menu">
            <i className="fas fa-bars"></i>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
