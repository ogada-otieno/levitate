import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { isAuthenticated } from "./PrivateRoutes";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState(null);

  const navigate = useNavigate();

  const isLoggedin = isAuthenticated();

  if (isLoggedin) {
    window.location.href = "/profile";
  }

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthUser(user);
  //       // navigate("/profile");
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });

  //   return () => {
  //     listen();
  //   };
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        const userData = {
          data: userCredential,
          isAuthenticated: true,
        };
        localStorage.setItem("auth", JSON.stringify(userData));
        window.location.href = "/profile";
      })
      .catch((err) => console.log(err, "err"));
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
        />
        <label>Password:</label>
        <input
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          class="field"
        />
        <button type="submit" className="ui brown button">
          Log In
        </button>
      </form>
      {/* {validationError && <p>{validationError}</p>} */}
    </div>
  );
}

export default LoginForm;
