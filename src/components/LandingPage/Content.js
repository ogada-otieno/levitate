import React from "react";

function Content() {
  return (
    <div class="ui placeholder segment">
      <div class="ui stackable very relaxed two column grid">
        <div class="column">
          <form class="ui form">
            <div class="field">
              <label>Username</label>
              <div class="ui left icon input">
                <input type="text" placeholder="Username" />
                <i aria-hidden="true" class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui left icon input">
                <input type="password" />
                <i aria-hidden="true" class="lock icon"></i>
              </div>
            </div>
            <button class="ui primary button">Login</button>
          </form>
        </div>
        <div class="middle aligned column">
          <button class="ui big button">
            <i aria-hidden="true" class="signup icon"></i>Sign up
          </button>
        </div>
      </div>
      <div class="ui vertical divider">Or</div>
    </div>
    
  );
}
export default Content;
