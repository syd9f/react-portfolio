import React from 'react';

const Project = ({ title, image, description, github, deployed }) => {
    const imagePath = require(`../images/${image}`);
  return (
    <section
        style={{
            background: "#FFE3FD",
            border: "2px solid black",
            padding: '20px'
        }}
    >
    <div>
      <h2>{title}</h2>
      <img src={imagePath} alt={title} height="200" />
      <p>{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer"><button>Github Repo</button></a>
      <a href={deployed} target="_blank" rel="noopener noreferrer"><button>Deployed Application</button></a>
    </div>
    </section>
  );
};

export default Project;