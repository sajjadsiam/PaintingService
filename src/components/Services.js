/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import content from '../data/content.json';
import '../styles/Services.css';

function Services() {
  const services = content.services;

  return (
    <section className="services-section">
      <h2>Providing Interior and Exterior Painting Services</h2>
      <p className="services-description">
        We have experience in painting any surface from new constructions to
        cabinets in commercial properties.
      </p>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <a href="#" className="btn">
          See All Services
        </a>
      </div>
    </section>
  );
}

export default Services;
