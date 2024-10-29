import React from 'react';
import content from '../data/content.json';
import '../styles/TopBar.css';

function TopBar() {
  const { phone, address, socialLinks } = content.topBar;

  return (
    <div className="top-bar">
      <div className="container">
        <div className="contact-info">
          <i className="fa fa-phone"></i>
          <span>{phone}</span>
          <i className="fa fa-map-marker"></i>
          <span>{address}</span>
        </div>
        <div className="social-icons">
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-youtube-play"></i>
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
