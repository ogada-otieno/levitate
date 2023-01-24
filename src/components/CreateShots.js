import React, { useState } from "react";

function CreateShots({newData}) {
  const [shotsData, setShotsData] = useState({
    title: "",
    image: "",
    description: "",
  });

  let accessToken =
  "722f0dd81bb8f53c1b09b5b847c5653a85de14e3a53a394e0582815aa6a84936";

  fetch(`https://api.dribbble.com/v2/user/shots?access_token=` + accessToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shotsData),
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      newData(data);
    });

    // onSubmit={handleSubmit}
    // onChange={handleChange}
  return (
    <div>
      <form >
        <input
          
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
        //   onChange={handleChange}
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
        //   onChange={handleChange}
          type="file"
          name="image"
          placeholder="Upload image"
          accept="image/jpeg, image/png, image/gif"
        />
        <button type="submit" className="add-btn">
          Add Shots
        </button>
      </form>
    </div>
  );
}

export default CreateShots;
