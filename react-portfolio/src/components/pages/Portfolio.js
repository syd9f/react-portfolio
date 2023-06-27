import React from 'react';
import Project from '../Project';

export default function Portfolio() {
    const projects = [
        { id: 1, title: 'Password Generator', description: 'Generate a Random Password' },
        { id: 2, title: 'Code Quiz', description: 'Practice your Coding Knowledge' },
        { id: 3, title: 'Workday Scheduler', description: 'Plan your Workday' },
      ];
    return (
    <div>
        <h1>Portfolio</h1>
        {projects.map((project) => (
        <Project key={project.id} title={project.title} description={project.description} />
        ))}
    </div>
    );
}