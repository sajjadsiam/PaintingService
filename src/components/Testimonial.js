import React, { useState } from 'react';
import content from '../data/content.json';
import '../styles/Testimonial.css';

function Testimonial() {
  const testimonials = content.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonial-section">
      <h2>What People Think About Us</h2>
      <div className="testimonial-container">
        <button className="arrow left" onClick={prevTestimonial}>
          &lt;
        </button>
        <div className="testimonial-content">
          <div className="profile-picture">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
            />
          </div>
          <p className="quote">"{testimonials[currentIndex].quote}"</p>
          <p className="author">{testimonials[currentIndex].name}</p>
          <p className="role">{testimonials[currentIndex].role}</p>
        </div>
        <button className="arrow right" onClick={nextTestimonial}>
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
