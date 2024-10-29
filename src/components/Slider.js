/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import content from '../data/content.json';
import '../styles/Slider.css';

function Slider() {
  const slides = content.slider;

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
            key={index}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <h1>{slide.subtitle}</h1>
              <div className="buttons">
                {slide.buttons.map((buttonText, btnIndex) => (
                  <a
                    href="#"
                    className={`btn btn-${
                      btnIndex === 0 ? 'primary' : 'secondary'
                    }`}
                    key={btnIndex}
                  >
                    {buttonText}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
