import React, { useState, useEffect } from "react";
import axios from "axios";
// import CreateProjects from "./CreateProjects";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    fetchProjects();
  }, []);

  function handleUpdate(id) {
    window.location.href = `/create/?id=${id}`;
  }

  function handleDelete(id) {
    axios
      .delete(
        `https://api.dribbble.com/v2/projects/${id}?access_token=` + accessToken
      )
      .then((res) => {
        fetchProjects();
      });
  }

  const project = projects.map((project) => {
    return (
      <>
        <div
          role="list"
          key={project.id}
          className="ui divided project-preview middle aligned list"
        >
          <div role="listitem" class="item">
            <Link to={`/projects/${project.id}`}>
              <h4 className="ui brown header">{project.name} </h4>
              <p>{project.description}</p>
            </Link>
          </div> 

          <div class="ui tiny buttons">
            <button class="ui button" onClick={() => handleUpdate(project.id)}>
              Update
            </button>
            <div class="or"></div>
            <button
              class="ui negative button"
              type="button"
              onClick={() => handleDelete(project.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  });

  return (
    <div>
      <div>{project.length > 0 ? <>{project}</> : <p>No projects...</p>}</div>
    </div>
  );
}

export default DisplayProjects;
