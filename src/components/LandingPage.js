import React from "react";
import LoginForm from "./LoginForm";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="page-one">
        <h1>
          Levitate enables you to create beautiful projects, and view them just
          like you would on Dribbble
        </h1>
      </div>
      <div className="page-two">
        <LoginForm />
      </div>
    </div>
  );
};

export default LandingPage;
