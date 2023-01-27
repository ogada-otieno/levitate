import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CreateProjects() {
  // const [projectData, setProjectData] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);

  let accessToken =
    "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

  const location = useLocation();
  // console.log(location.search);

  let id = new URLSearchParams(location.search).get("id");
  // console.log(id);

  const navigate = useNavigate();

  const handleUpdate = (id) => {
    let newEntry = { name, description };
    let url = `https://api.dribbble.com/v2/projects/${id}?access_token=${accessToken}`;

    fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    }).then((res) => {
      console.log("New project created");
      setIsPending(false);
      navigate("/projects");
    });
  };

  const isId = !(id === null || id === undefined || id === "");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isId) {
      return handleUpdate(id);
    }

    let newEntry = { name, description };
    setIsPending(true);
    let url = `https://api.dribbble.com/v2/projects?access_token=${accessToken}`;

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    }).then((res) => {
      // console.log(res);
      console.log("New project created");
      setIsPending(false);
      navigate("/projects");
    });

    // console.log(newEntry);
    // window.location.reload();
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
        {!isPending && (
          <button className="add-btn">
            {isId ? "Update Project" : "Add Project"}
          </button>
        )}
        {isPending && (
          <button className="add-btn" disabled>
            Adding Project
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateProjects;
