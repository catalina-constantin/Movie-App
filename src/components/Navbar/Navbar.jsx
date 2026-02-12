import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
        top: "20px",
        position: "sticky",
        minWidth: "500px",
      }}
    >
      <nav className="navbar">
        <img src="src/assets/logo.svg" alt="Movie App Logo" className="logo" />
        <ul id="navlinks" className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/watchlist">Watchlist</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
