import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayProjects from "./DisplayProjects";
import { Link } from "react-router-dom";
import { database } from "../firebase";

let accessToken =
  "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

  console.log(database);

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
          <div className="">
            <div className="ui floated segment">
              <img
                src={userData.avatar_url}
                alt={userData.name}
                className="ui small circular image"
              />
              <h2>{userData.name}</h2>
              <p>
                <b>Bio:</b>
                {userData.bio}
              </p>
              <p>{userData.location}</p>
              <a href="mailto:{userData.email}">
                <i className="ui small mail icon"></i>
                Send email
              </a>
              {/* eslint-disable-next-line */}
              <br />
              <a href={userData.html_url} target="_blank">
                <i className="ui small linkify icon"></i>
                Dribbble
              </a>
            </div>
            <div className=""></div>
          </div>
        </>
      );
    } else {
      return (
        <div className="">
          <p>User details not available...</p>
        </div>
      );
    }
  };

  return (
    <div className="ui small floated segment">
      <h3 className="ui dividing header">My profile</h3>
      {renderUser()}
      <h3 className="ui dividing header">
        My projects
        <br/>
  
        <span  >
            <Link to="/create">
              <button class="ui tiny justified brown animated button">
                <div class="visible content">Add New Project</div>
                <div class="hidden content">
                  <i aria-hidden="true">Get Started</i>
                </div>
              </button>
            </Link>
        </span>
      </h3>

      <div>
        <DisplayProjects />
      </div>
    </div>
  );
}

export default UserProfile;

