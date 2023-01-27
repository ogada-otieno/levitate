import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setValidationError("Email is required");
    } else if (!password) {
      setValidationError("Password is required");
    } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)) {
      setValidationError("Invalid email format");
    } else {
      // submit form
    }
  };

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} class="ui small left floated form">
        <label>Email:</label>
        <input
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          class="field"
        ></input>
        <label>Password:</label>
        <input
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          class="field"
        ></input>
        <button className="ui brown button">Submit</button>
      </form>
      {validationError && <p>{validationError}</p>}
    </div>
  );
}

export default LoginForm;
