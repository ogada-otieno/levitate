import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import { isAuthenticated } from "../components/PrivateRoutes";

function Navbar() {
  return (
    <nav className="ui navbar brown">
      <div>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <ul className="navbar-list">
          {isAuthenticated() && (
            <li className="navbar-item">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Link to="/projects">Projects</Link>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Link to="/create">Add Project</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="rightitems">
        <ul className="navbar-list">
          {!isAuthenticated() && (
            <>
              <li className="navbar-item">
                <Link to="/login">Login</Link>
              </li>

              <li className="navbar-item">
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
          {isAuthenticated() && (
            <>
              <li className="navbar-item" onClick={() => Logout()}>
                <Link to="/login">Logout</Link>
              </li>

              <li className="navbar-item">
                <Link to="/profile">Profile</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
