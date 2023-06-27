import React from 'react';


const Project = ({ title, imageLink, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageLink} alt="application" height="200" />
      <p>{description}</p>
    </div>
  );
};

export default Project;