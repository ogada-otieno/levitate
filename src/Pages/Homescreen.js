import React from "react";
import Navbar from "./Navbar";

const Homescreen = ({ Component }) => {
  return (
    <div>
      <Navbar />
      {Component}
    </div>
  );
};

export default Homescreen;
