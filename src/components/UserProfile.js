import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayProjects from "./DisplayProjects";
import { Link } from "react-router-dom";

let accessToken =
  "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const fetchUser = () => {
    axios
      .get(`https://api.dribbble.com/v2/user?access_token=` + accessToken)
      .then((res) => {
        const fetchedUser = res.data;
        setUserData(fetchedUser);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const renderUser = () => {
    if (userData) {
      return (
        <>
          <div>
            <Link to="/create">
              <button className="add-btn">Add Project</button>
            </Link>
          </div>
          <div className="user-details">
            <div className="user-avatar">
              <img src={userData.avatar_url} alt={userData.name} />
            </div>
            <div className="user-info">
              <h2>{userData.name}</h2>
              <p>
                <b>Bio:</b>
                {userData.bio}
              </p>
              <p>{userData.location}</p>
              <a href="mailto:{userData.email}">Send email</a> 
              {/* eslint-disable-next-line */}
              <a href={userData.html_url} target="_blank">
                Dribbble
              </a>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="user-details">
          <p>User details not available...</p>
        </div>
      );
    }
  };

  return (
    <div>
      {renderUser()}
      <DisplayProjects />
    </div>
  );
}

export default UserProfile;
