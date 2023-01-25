import React, { useState } from "react";
import axios from "axios";
function CreateShots({ newShots }) {
  const [shotsData, setShotsData] = useState({
    title: "",
    images: "",
    description: "",
  });

  let accessToken =
    "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://api.dribbble.com/v2/shots?access_token=${accessToken}`,
        shotsData,
        // { mode: "no-cors" },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
            "Access-Control-Allow-Origin": "http://172.30.37.142:3000/",
            "Access-Control-Allow-Credentials": true,
           },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } 

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setShotsData({ ...shotsData, [key]: value });
  };

  //   console.log(shotsData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          onChange={handleChange}
          type="file"
          name="images"
          placeholder="Upload image"
          accept="image/jpeg, image/png, image/gif"
          //   width={400}
          //   height={300}
        />
        <button type="submit" className="add-btn">
          Add Shots
        </button>
      </form>
    </div>
  );
}

export default CreateShots;
