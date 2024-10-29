/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import content from '../data/content.json';
import '../styles/Footer.css';

function Footer() {
  const { about, services, posts, socialLinks } = content.footer;

  return (
    <footer className="footer-section">
      <div className="footer-column">
        <h3>About</h3>
        <p>{about}</p>
      </div>

      <div className="footer-column">
        <h3>Services</h3>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <span className="check-icon">✔</span> {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-column">
        <h3>Recent Posts</h3>
        <ul className="recent-posts">
          {posts.map((post, index) => (
            <li key={index}>
              <img src={post.image} alt="Post" />
              <div>
                <p>
                  admin <span>{post.date}</span>
                </p>
                <a href="#">{post.title}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-column">
        <h3>Follow Us</h3>
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa fa-${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="main-footer">
        <p>AlphaCoat ©2024. All rights reserved.</p>
        <div className="footer-social-icons">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa fa-${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
