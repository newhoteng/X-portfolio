import React from 'react';
import { Link } from 'react-router-dom';
// import { BiRightArrow } from 'react-icons/bi';
// import { GoArrowUpRight } from 'react-icons/go';
import { FiArrowUpRight } from 'react-icons/fi';

import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container hc">
      <h1>CONTACT</h1>
      <div className="details">
        <div className="email-container">
          <p className="contact-heading">EMAIL</p>
          <div className="contact-body">
            <a className="social-link" href="mailto:harriet.oteng@gmail.com">
              <FiArrowUpRight />
              harriet.oteng@gmail.com
            </a>
            <a className="social-link" href="mailto:harriet.oteng@yahoo.com">
              <FiArrowUpRight />
              harriet.oteng@yahoo.com
            </a>
          </div>
        </div>
        <div className="socials-container">
          <p className="contact-heading">SOCIAL MEDIA</p>
          <div className="contact-body">
            <Link to="https://www.linkedin.com/in/harriet-oteng/" target="_blank" rel="noreferrer">
              <div className="social-link">
                <FiArrowUpRight />
                <p>LinkedIn</p>
              </div>
            </Link>
            <Link to="https://github.com/newhoteng" target="_blank" rel="noreferrer">
              <div className="social-link">
                <FiArrowUpRight />
                <p>GitHub</p>
              </div>
            </Link>
            <Link to="https://instagram.com/harriet.oteng?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
              <div className="social-link">
                <FiArrowUpRight />
                <p>Instagram</p>
              </div>
            </Link>
            <Link to="https://twitter.com/HarrietOteng1" target="_blank" rel="noreferrer">
              <div className="social-link">
                <FiArrowUpRight />
                <p>Twitter</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
