import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import { isAuthenticated } from "../components/PrivateRoutes";

function Navbar() {
  return (
    <nav id="navBar">
      <div>
        <ul className="ui menu">
          <li className="item">
            <Link to="/" className="item">
              Home
            </Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/projects" className="item">
              Projects
            </Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/create" className="item">
              Add Project
            </Link>
          </li>

        

            {!isAuthenticated() && (
              <>
                <li className="right floated item">
                  <Link to="/login">Login</Link>
                </li>

                <li className="item">
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
            <li className="right floated item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="item" onClick={() => Logout()}>
              <Link to="/login">Logout</Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
