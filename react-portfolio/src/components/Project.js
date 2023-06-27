import React from 'react';


const Project = ({ title, imageLink, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <image src={imageLink}></image>
      <p>{description}</p>
    </div>
  );
};

export default Project;