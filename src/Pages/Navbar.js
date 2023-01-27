import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="ui navbar brown">
      <div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/projects">Projects</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/create">Add Project</Link>
          </li>
        </ul>
      </div>
      <div className="rightitems">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login">Logout</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        {/* <form className="navbar-search-form">
          <input
            className="navbar-search-input"
            type="text"
            placeholder="Search..."
          />
          <button className="navbar-search-button" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
}

export default Navbar;
