/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import content from '../data/content.json';
import '../styles/Navbar.css';

function Navbar() {
  const { logo, menu, dropdowns } = content.navbar;

  return (
    <div className="navbar">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            {menu.map((item, index) => (
              <li
                key={index}
                className={dropdowns[item.toLowerCase()] ? 'dropdown' : ''}
              >
                <a href="#">{item}</a>
                {dropdowns[item.toLowerCase()] && (
                  <div className="dropdown-content">
                    {dropdowns[item.toLowerCase()].map((subItem, subIndex) => (
                      <a href="#" key={subIndex}>
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
