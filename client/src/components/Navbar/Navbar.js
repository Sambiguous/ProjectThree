import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="ml-auto">
    <div className="container-fluid">
      <div className="navbar-header">
      </div>
      <ul className="nav navbar-nav">
        <li
          className={window.location.pathname === "/play" ? "active" : ""}
        >
          <Link to="/play">Play</Link>
        </li>
        <li className={window.location.pathname === "/create" ? "active" : ""}>
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
