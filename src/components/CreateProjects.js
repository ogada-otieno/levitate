import React, { useState } from "react";
// import axios from "axios";

function CreateProjects() {
  // const [projectData, setProjectData] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  let accessToken =
    "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newEntry = { name, description };
    let url =
      "https://api.dribbble.com/v2/projects?access_token=722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // mode: "no-cors",
      body: JSON.stringify(newEntry),
    }).then((res) => console.log(res));

    console.log(newEntry);
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Project name: </label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Project description: </label>
        <textarea
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="add-btn">
          Add Project
        </button>
      </form>
    </div>
  );
}

export default CreateProjects;
