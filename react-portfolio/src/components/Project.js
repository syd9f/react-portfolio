import React from 'react';


const Project = ({ title, image, description }) => {
    const imagePath = require(`../images/${image}`).default;
  return (
    <div>
      <h2>{title}</h2>
      <img src={imagePath} alt={title} height="200" />
      <p>{description}</p>
    </div>
  );
};

export default Project;