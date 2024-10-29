/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import content from '../data/content.json';
import '../styles/CTASection.css';

function CTASection() {
  const { title, description, buttonText } = content.ctaSection;

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="" className="cta-button">
          {buttonText}
        </a>
      </div>
    </section>
  );
}

export default CTASection;
