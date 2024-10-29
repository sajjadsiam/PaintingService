/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import content from '../data/content.json';
import '../styles/Projects.css';

function Projects() {
  const projects = content.projects;

  return (
    <section className="projects-section">
      <h2>Our Projects</h2>
      <div className="filters">
        <a href="#" className="active">
          All
        </a>
        <a href="#">Electrical</a>
        <a href="#">Garden</a>
        <a href="#">Heating</a>
        <a href="#">Home Maintenance</a>
        <a href="#">Painting</a>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <div className="overlay-content">
                <p>{project.description}</p>
                <a href="#" className="btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
