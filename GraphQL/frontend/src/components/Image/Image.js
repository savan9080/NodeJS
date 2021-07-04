import React from "react";

import "./Image.css";

const image = (props) => (
  <div>
    <img
      className="image"
      style={{
        backgroundSize: props.contain ? "contain" : "cover",
        backgroundPosition: props.left ? "left" : "center",
      }}
      src={props.imageUrl}
    ></img>
  </div>
);
// backgroundImage: `'${props.imageUrl}'`,
export default image;
