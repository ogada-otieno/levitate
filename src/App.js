import React from "react";
// import NavBar from "./components/LandingPage/NavBar"
// import Content from "./components/LandingPage/Content";
// import NavBar from "./components/Homepage/NavBar";
// import Content from "./components/Homepage/Content";
// import LoginForm from "./components/Validation/LoginForm";
// import SignUpForm from "./components/Validation/SignUpForm";
import LoginValidation from "./components/Validation/LoginValidation";
import SignUpValidation from "./components/Validation/SignUpValidation";
import NavBar from "./components/Validation/NavBar";

function App() {
  return (
    <div>
      <LoginValidation/>
      {/* <SignUpValidation/> */}

    </div>
  )
  // <PasswordAndConfirmPasswordValidation />;
}
export default App;
