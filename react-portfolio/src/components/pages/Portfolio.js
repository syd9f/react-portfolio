import React from 'react';
import Project from '../Project';

export default function Portfolio() {
    const projects = [
        { 
            id: 1, 
            title: 'Password Generator', 
            image: 'password-generator.png', 
            description: 'Generate a Random Password', 
            github: 'https://www.github.com/syd9f/password-generator',
            deployed: 'https://www.syd9f.github.io/password-generator'
        },  
        { 
            id: 2, 
            title: 'Code Quiz', 
            image: 'code-quiz.png', 
            description: 'Practice your Coding Knowledge',
            github: 'https://www.github.com/syd9f/code-quiz',
            deployed: 'https://www.syd9f.github.io/code-quiz'
        },
            
        { 
            id: 3, 
            title: 'Workday Scheduler', 
            image: 'workday-scheduler.png', 
            description: 'Plan your Workday',
            github: 'https://www.github.com/syd9f/workday-scheduler',
            deployed: 'https://www.syd9f.github.io/workday-scheduler'
        },

      ];
    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Portfolio</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
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
    </div>
    );
}