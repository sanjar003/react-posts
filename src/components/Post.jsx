import React from "react";

const Post = ({ name, image, status, species, gender }) => {
  return (
    <div className="Posts" key={status}>
      <div>
        <img src={image} alt={"hjk"} />
      </div>
      <div className="TextContainer">
        <h2>{name}</h2>
        <div className="ChildrenContainer">
          <div
            className="Baground"
            style={
              status === "Alive" ? { background: "green" } : { background: "red" }
            }
          ></div>

          <h2>{status}</h2>
        </div>

        <h2>{species}</h2>
        <h3>{gender}</h3>
      </div>
    </div>
  );
};

export default Post;
