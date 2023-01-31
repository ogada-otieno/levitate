import React, { useState } from "react";

function SignUpForm() {
  const db = require("./db.json");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");

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
      const registeredUser = {
        id: Math.random() * 1000000000,
        email: email,
        password: password,
      };

      db.users.unshift(registeredUser);

      db.users.map((user) => {
        localStorage.setItem("id", user.id);
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);
      });

      console.log(localStorage.getItem("email"));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="ui small left floated form">
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
        ></input>
        <br />
        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          class="field"
        ></input>
        <button type="submit" className="ui tiny brown button">
          Submit
        </button>
      </form>
      {validationError && <p>{validationError}</p>}
    </div>
  );
}

export default SignUpForm;
