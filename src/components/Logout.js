import React from "react";

const Logout = () => {
  localStorage.clear();
  window.location.href = "/";
  return;
};

export default Logout;
