import React from 'react';
import { Link } from 'react-router-dom';
import projects from './project-list.js';

function Portfolio() {
    return (
        <div className="container">
            <h1>My Projects</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4 d-flex" key={index}>
                        <Link to={`/project/${project.id}`} className="card flex-fill text-decoration-none">
                            <img src={`./../images/project${project.id}/project_icon.png`} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;