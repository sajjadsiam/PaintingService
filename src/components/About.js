import React from 'react';
import content from '../data/content.json';
import '../styles/About.css';

function About() {
  const about = content.about;

  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <div className="underline"></div>
        <p className="description">{about.description}</p>
        <div className="service-list">
          {about.services.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="service-icon">
                <i className="fas fa-check"></i>
              </div>
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <img src="assets/images/about-image.png" alt="Painter" />
      </div>
    </section>
  );
}

export default About;
