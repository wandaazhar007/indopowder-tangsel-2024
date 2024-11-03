import React from "react";
import "./navbarNew.scss"; // Ensure this file exists for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbarContainer">
        <div className="navbarLeft">
          <div className="navbarLogo">
            <Link href="/" aria-label="TechCrunch Home"><h1>Indopowder</h1></Link>
          </div>
          <nav className="navbarLinks">
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Product</Link></li>
              <li><Link href="/faq">Faq &apos; s</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="navbarActions">
          <Link href="#signin" className="navbarSignin" aria-label="Sign In">Sign In</Link>
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
