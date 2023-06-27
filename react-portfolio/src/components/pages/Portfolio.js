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
        { 
            id: 4, 
            title: 'Meal Planner', 
            image: 'mealplanner.png', 
            description: 'Plan your meals by searching for an Ingredient',
            github: 'https://www.github.com/mark-227-g/mealplanner',
            deployed: 'https://mark-227-g.github.io/mealplanner/'
        },
        { 
            id: 5, 
            title: 'README Generator', 
            image: 'readme-generator.gif', 
            description: 'Answer Prompts to generate a README.md file for your project',
            github: 'https://www.github.com/syd9f/readme-generator',
            deployed: 'https://www.syd9f.github.io/readme-generator'
        },
        { 
            id: 6, 
            title: 'Note Taker', 
            image: 'note-taker.png', 
            description: 'Take notes!',
            github: 'https://www.github.com/syd9f/note-taker',
            deployed: 'https://www.syd9f.github.io/note-taker'
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