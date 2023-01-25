import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateShots from "./CreateShots";

let accessToken =
  "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

function DisplayShots() {
  const [shots, setShots] = useState([]);
  const fetchShots = () => {
    axios
      .get(`https://api.dribbble.com/v2/user/shots?access_token=` + accessToken)
      .then((res) => {
        const fetchedShots = res.data;
        setShots(fetchedShots);
      })
      .catch((err) => console.log(err));
  };

  //   console.log(shots);

  useEffect(() => {
    fetchShots();
  }, []);

  const display =
    shots &&
    shots.map((shot) => {
      return (
        <div key={shot.id}>
          <h4>{shot.title}</h4>
          {/* <>{shot.description}</> */}
          <img src={shot.images.hidpi} alt={shot.title} />
        </div>
      );
    });

  const newShots = (newShot) => {
    const updatedShots = [...shots, newShot];
    setShots(updatedShots);
  };

  return (
    <div>
      {display.length > 0 ? <>{display}</> : <p>You don't have any project or shot to display!</p>}
      <CreateShots newShots={newShots} />
    </div>
  );
}

export default DisplayShots;
