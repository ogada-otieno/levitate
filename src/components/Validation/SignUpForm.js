import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setValidationError("Email is required");
    } else if (!password) {
      setValidationError("Password is required");
    } else if (password !== confirmPassword) {
      setValidationError("Passwords do not match");
    } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)) {
      setValidationError("Invalid email format");
    } else {
      // submit form
    }
  };

  return (
    <div class="ui segment">
      <form onSubmit={handleSubmit} className="ui small center aligned form">
        <input
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          class="field"
        ></input>
        <input
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          class="field"
        ></input><br/>
        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          class="field"
        ></input>
        <button type="submit"
        className = "ui tiny brown button"
        >Submit</button>
      </form>
      {validationError && <p>{validationError}</p>}
    </div>
  );
}

export default SignUpForm;
