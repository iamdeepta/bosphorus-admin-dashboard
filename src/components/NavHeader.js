import React from "react";
import "./css/navheader.css";

const NavHeader = () => {
  return (
    <>
      <div className="nav-header">
        <a href="/" className="brand-logo">
          <img className="logo-abbr" src="images/logo.webp" alt="logo" />
          <img className="logo-compact" src="images/logo-text.png" alt="logo" />
          {/* <img className="brand-title" src="images/logo-text.png" alt="logo" /> */}
          <p className="brand-title">Bosphorus</p>
        </a>

        <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
