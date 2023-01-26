import React from "react";

function SignUp() {
  return (
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input placeholder="First Name" />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </div>

      <div className="field">
        <label>Email</label>
        <input placeholder="Email" />
      </div>

      <div className="field">
        <label>Password</label>
        <input placeholder="Password" />
      </div>

      <div className="field">
        <label>Confirm Password</label>
        <input placeholder="Confirm Password" />
      </div>

      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox"/>
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button class="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SignUp;
