/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import content from '../data/content.json';
import '../styles/EstimateSection.css';

function EstimateSection() {
  const estimateContent = content.estimateSection;

  return (
    <section className="estimate-section">
      <div className="image">
        <img src="assets/images/appointmentboy.webp" alt="Painter with tools" />
      </div>
      <div className="content">
        <h2>{estimateContent.title}</h2>
        <p>{estimateContent.description}</p>
        <a href="#" className="btn">
          Make an Appointment
        </a>
      </div>
    </section>
  );
}

export default EstimateSection;
