import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateProjects from "./CreateProjects";

let accessToken =
  "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

function DisplayProjects() {
  const [projects, setProjects] = useState([]);
  const fetchProjects = () => {
    axios
      .get(
        `https://api.dribbble.com/v2/user/projects?access_token=` + accessToken
      )
      .then((res) => {
        const fetchedProjects = res.data;
        setProjects(fetchedProjects);
      })
      .catch((err) => console.log(err));
  };

  //   console.log(projects);

  useEffect(() => {
    fetchProjects();
  }, []);

  const display = projects.map((project) => {
    return (
      <div key={project.id}>
        <h3>{project.name}: </h3>
        <h5>{project.description}</h5>
      </div>
    );
  });

  const newProjects = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
  };

  return (
    <div>
      {display.length > 0 ? <>{display}</> : <p>No projects...</p>}
      <CreateProjects newProjects={newProjects} />
    </div>
  );
}

export default DisplayProjects;
