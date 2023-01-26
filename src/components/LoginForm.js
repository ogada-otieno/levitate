import React from "react";

function LoginForm() {
  return (
    <form class="ui form">
      <div class="field">
        <label>Email</label>
        <input placeholder="Email" />
      </div>
      <div class="field">
        <label>Password</label>
        <input placeholder="Password" />
      </div>
      <button class="ui button" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm
