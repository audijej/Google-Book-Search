import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Google Book Search
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/searchbook"
              className={
                window.location.pathname === "/searchbook" || window.location.pathname === "/searchbook"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search A Book
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/viewbook"
              className={window.location.pathname === "/viewbook" ? "nav-link active" : "nav-link"}
            >
              Saved Books
            </Link>
          </li>
        
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
