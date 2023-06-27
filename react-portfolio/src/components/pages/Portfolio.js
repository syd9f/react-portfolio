import React from 'react';
import Project from '../Project';

export default function Portfolio() {
    const projects = [
        { 
            id: 1, 
            title: 'Password Generator', 
            image: 'password-generator.png', 
            description: 'Generate a Random Password', 
            github: 'http://www.github.com/syd9f/password-generator',
            deployed: 'http://www.syd9f.github.io/password-generator'
        },  
        { 
            id: 2, 
            title: 'Code Quiz', 
            image: 'code-quiz.png', 
            description: 'Practice your Coding Knowledge',
            github: 'http://www.github.com/syd9f/code-quiz',
            deployed: 'http://www.syd9f.github.io/code-quiz'
        },
            
        { 
            id: 3, 
            title: 'Workday Scheduler', 
            image: 'workday-scheduler.png', 
            description: 'Plan your Workday',
            github: 'http://www.github.com/syd9f/workday-scheduler',
            deployed: 'http://www.syd9f.github.io/workday-scheduler'
        },

      ];
    return (
    <div>
        <h1>Portfolio</h1>
        {projects.map((project) => (
        <Project 
            key={project.id} 
            title={project.title} 
            image={project.image} 
            description={project.description}
            github={project.github}
            deployed={project.deployed} />
        ))}
    </div>
    );
}