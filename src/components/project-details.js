import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import projects from './project-list.js';

function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find(proj => proj.id === parseInt(id));
    return (
        <div className="container ">
            <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
            <div className='card '>
                <h2>{project.title} Overview</h2>
                <img src={project.image} alt={project.title} className="img-fluid detail-image" />
                <p>{project.description}</p>
                <a href={project.github} className="btn btn-primary">Github Page</a>
            </div>


            <div className="row mt-5">
                <div className="col-12">
                    <h4>Project Gallery</h4>
                    <div className='card'>
                        <div id="imageGallery" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {project.gallery.map((image, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img src={image} className="d-block carousel-image" />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#imageGallery" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#imageGallery" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                            <h4>Project Description</h4>
                            <p>{project.long_description}</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                            <h4>Technologies Used</h4>
                            <p>{project.technologies}</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                            <h4>My Contributions</h4>
                            <p>{project.contributions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;