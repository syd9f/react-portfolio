import React from 'react';
import Project from '../Project';

export default function Portfolio() {
    const projects = [
        { id: 1, title: 'Password Generator', imageLink: './images/password-generator', description: 'Generate a Random Password' },
        { id: 2, title: 'Code Quiz', imageLink: './images/code-quiz', description: 'Practice your Coding Knowledge' },
        { id: 3, title: 'Workday Scheduler', imageLink: './images/workday-scheduler', description: 'Plan your Workday' },
      ];
    return (
    <div>
        <h1>Portfolio</h1>
        {projects.map((project) => (
        <Project key={project.id} title={project.title} imageLink={project.imageLink} description={project.description} />
        ))}
    </div>
    );
}