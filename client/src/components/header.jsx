import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header d-flex align-items-center light-background sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Kajal</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="header-social-links">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
