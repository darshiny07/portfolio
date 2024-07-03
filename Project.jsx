import React from 'react';
import './Project.css'
import design from './static.png'
import watch from './timer.png'
import weather from './weather.png'
import movie from './movie.png'
import bill from './bill.png'

import { Element } from 'react-scroll';
const projects = [
    {
        title: 'Static fashion design website',
        description: 'A responsive website using Html ,css ,Boostrap',
        link: 'https://quiet-toffee-98472d.netlify.app/',
        image: design
    },
    {
        title: 'Stop Watch Timer',
        description: 'The timer contain stop,start and reset funtion by using Javascript',
        link: 'https://dancing-marshmallow-bd6ae0.netlify.app/',
        image: watch
    },
    {
        title: 'Bill Store Application',
        description: 'Storing bill details in local Storage by usuing React Js',
        link: 'https://app.netlify.com/sites/super-valkyrie-7fa3ee/overview',
        image : bill
    },
    {
        title: 'Movie watched List',
        description: 'You add your custom watched movies title,image your point of rating summary',
        link: 'https://delicate-biscochitos-d54a77.netlify.app/',
        image: movie
    },
    {
        title: 'Weather app',
        description: 'Fetching data from Api using axios build in React Js',
        link: 'https://beautiful-sorbet-40e2d8.netlify.app/',
        image: weather
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
