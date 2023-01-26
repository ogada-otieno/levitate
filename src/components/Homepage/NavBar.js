import React from "react";

function NavBar() {
  return (
    <section className="ui segment">
      <div>
        <div>
          <span>
            <button className="ui small left floated brown button">Home</button>
            <button className="ui small left floated brown button">
              My Profile
            </button>
            <button className="ui small left floated brown button">
              My Projects
            </button>
            <div>
          <button type="submit" className="ui right floated brown button">
            Sign out
            <i className="ui log out small icon" />
          </button>
        </div>
          </span>
        </div>
        <h2 class="ui large center brown header">LEVITATE</h2>
      </div>
    </section>
  );
}
export default NavBar;
