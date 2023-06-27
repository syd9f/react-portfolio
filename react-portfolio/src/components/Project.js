import React from 'react';


const Project = ({ title, image, description, link }) => {
    const imagePath = require(`../images/${image}`).default;
    const githubPath = require(`http://www.github.com/syd9f/${link}`).default;
    const deployedPath = require(`http://www.syd9f.github.io/${link}`).default;
  return (
    <div>
      <h2>{title}</h2>
      <img src={imagePath} alt={title} height="200" />
      <p>{description}</p>
      <a href={githubPath}><button>Github Repo</button></a>
      <a href={deployedPath}><button>Deployed Application</button></a>
    </div>
  );
};

export default Project;