import React from "react";
import LoginForm from "./LoginForm";
import image from "../assets/wenhao-ryan-9LeeUdsGwOk-unsplash.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();


  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={myStyle} className="ui segment"></div>
      <div className="ui text container">
        <h3 className="ui brown header">About Us:</h3>
        <p>
          Our mission at Levitate is to enable you to breath life into the art
          your create with us.
          <br />
          We seek to be your source of inspiration, motivation and reference.
          Our app can be as private as your own personal thoughts, <br />
          or as loud and as popular as your art commands.
        </p>
      </div>



      
      <div className="ui stackable center aligned two column grid">
        <div className="middle aligned row">
          <div className="column">
            <div className="ui small icon header">
              <i aria-hidden="true" className="ui small user icon"></i>Already a user?
            </div>
            <button
              className="ui brown button"
              onClick={() => {
                navigate("/login")
              }}
            >
              Log In
            </button>
          </div>
          <div className="column">
            <div className="ui small icon header">
              <i aria-hidden="true" className="ui small user icon"></i>Don't have an
              account?
            </div>
            <button
              className="ui brown button"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
