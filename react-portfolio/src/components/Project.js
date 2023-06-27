import React from 'react';


const Project = ({ title, image, description, github, deployed }) => {
    const imagePath = require(`./images/${image}`).default;
  return (
    <div>
      <h2>{title}</h2>
      <img src={imagePath} alt={title} height="200" />
      <p>{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer"><button>Github Repo</button></a>
      <a href={deployed} target="_blank" rel="noopener noreferrer"><button>Deployed Application</button></a>
    </div>
  );
};

export default Project;