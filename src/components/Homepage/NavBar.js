import React from "react";

function NavBar() {
  return (
    <section className="ui segment">
      <div>
        <div class="ui segment inverse">
          <h2 class="ui header center aligned">
            <span>
              <h3 className="ui left floated header">Home</h3>
              <h3 className="ui left floated header">My Profile</h3>
              <h3 className="ui left floated header">Search</h3>
            </span>
            LEVITATE
            <span className="ui right floated header">
              <h4>Sign In</h4>
              
            </span>
            <span className="ui right floated header">
              <h4>Sign out</h4>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
export default NavBar;
