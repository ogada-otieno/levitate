import React, { useEffect, useState } from "react";
import axios from "axios";

let accessToken =
  "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

const Home = () => {
  const [shots, setShots] = useState(null);
  const fetchShots = () => {
    axios
      .get(`https://api.dribbble.com/v2/user?access_token=` + accessToken)
      .then((res) => {
        const fetchedShots = res.data;
        setShots(fetchedShots);
      })
      .catch((err) => console.log(err));
  };

  console.log(shots);

  useEffect(() => {
    fetchShots();
  }, []);

  return (
    <div>
      <h1>Levitate Home Page</h1>
    </div>
  );
};

export default Home;
