import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <img src={logo} alt="Movie App Logo" className="logo" />
        <ul id="navlinks" className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/watchlist">Watchlist</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
