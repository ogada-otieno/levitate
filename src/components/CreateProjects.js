import React, { useState } from "react";
import axios from "axios";


function CreateProjects({ newProjects }) {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
  });

  let accessToken =
    "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken}`,
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": true,
      },
    };
    try {
      const response = await axios.post(
        `https://api.dribbble.com/v2/projects?access_token=${accessToken}`,
        config,
        projectData
      );
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setProjectData({ ...projectData, [key]: value });
  };

  // console.log(projectData);
  newProjects = projectData;
  // console.log(newProjects);
  // console.log(response.data);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="Description"
        />
        <button type="submit" className="add-btn">
          Add Project
        </button>
      </form>
    </div>
  );
}

export default CreateProjects;
