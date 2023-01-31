import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setValidationError("Email is required");
    } else if (!password) {
      setValidationError("Password is required");
    } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)) {
      setValidationError("Invalid email format");
    } else {
      e.preventDefault();
      console.log({ email, password });
      setPassword("");
      setEmail("");
    }
  };
  const gotoSignUpPage = () => navigate("/register");

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} class="ui small center aligned form">
        <label htmlFor="email">Email:</label>
        <input
          placeholder="Enter email"
          class="field"
          type="text"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter password"
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="ui brown button">Submit</button>
        <p>
          Don't have an account?{" "}
          <span className="link" onClick={gotoSignUpPage}>
            Sign up
          </span>
        </p>
      </form>
      {validationError && <p>{validationError}</p>}
    </div>
  );
}

export default LoginForm;
