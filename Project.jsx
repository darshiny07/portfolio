import React from 'react';
import './Project.css'
import { Element } from 'react-scroll';
const projects = [
    {
        title: 'Static fashion design website',
        description: 'A responsive website using Html ,css ,Boostrap',
        link: 'https://example.com/project1',
        image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'
    },
    {
        title: 'Stop Watch Timer',
        description: 'The timer contain stop,start and reset funtion by using Javascript',
        link: 'https://example.com/project2',
        image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'
    },
    {
        title: 'Bill Store Application',
        description: 'Storing bill details in local Storage by usuing React Js',
        link: 'https://example.com/project2',
        image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'
    },
    {
        title: 'Movie watched List',
        description: 'You add your custom watched movies title,image your point of rating summary',
        link: 'https://example.com/project2',
        image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'
    },
    {
        title: 'Weather app',
        description: 'Fetching data from Api using axios build in React Js',
        link: 'https://example.com/project2',
        image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'
    }
];

const Project = () => {
    return (
        <Element className="project-section" name="Project">
            <div className='Project_header'>
            <h2>PROJECTS</h2>
            </div>
            
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-details">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <span className="project-link">View Project</span>
                        </div>
                    </a>
                </div>
            ))}
        </Element>
    );
};

export default Project;
