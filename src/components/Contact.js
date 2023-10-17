import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { FiArrowUpRight } from 'react-icons/fi';

import '../styles/Contact.css';

function Contact() {
  useEffect(() => {
    // ReactGA.pageview(window.location.pathname);
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search, title: 'Contact Page' });
  }, []);
  return (
    <div className="contact-container">
      <div className="shapes-cont">
        <div className="shape1" />
        <div className="shape2" />
        <div className="shape3" />
        <div className="shape4" />
      </div>
      <h1>CONTACT</h1>
      <div className="contact-details">
        <div className="email-container">
          <p className="contact-heading">EMAIL</p>
          <div className="contact-body">
            <a className="link" href="mailto:harriet.oteng@gmail.com" target="_blank" rel="noreferrer">
              <FiArrowUpRight />
              harriet.oteng@gmail.com
            </a>
            <a className="link" href="mailto:harriet.oteng@yahoo.com" target="_blank" rel="noreferrer">
              <FiArrowUpRight />
              harriet.oteng@yahoo.com
            </a>
          </div>
        </div>
        <div className="socials-container">
          <p className="contact-heading">SOCIAL MEDIA</p>
          <div className="contact-body">
            <a className="link" href="https://www.linkedin.com/in/harriet-oteng/" target="_blank" rel="noreferrer">
              <FiArrowUpRight />
              LinkedIn
            </a>
            <a className="link" href="https://github.com/newhoteng" target="_blank" rel="noreferrer">
              <FiArrowUpRight />
              <p>GitHub</p>
            </a>
            <a className="link" to="https://instagram.com/harriet.oteng?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
              <FiArrowUpRight />
              Instagram
            </a>
            <a className="link" href="https://twitter.com/HarrietOteng1" target="_blank" rel="noreferrer">
              <FiArrowUpRight />
              Twitter
            </a>
          </div>
        </div>
      </div>
      <form action="https://formsubmit.co/harriet.oteng@gmail.com" method="post">
        <input type="text" id="name" name="user_name" placeholder="Full name" />
        <input type="text" id="mail" name="user_email" required placeholder="Email address" />
        <textarea className="mobile" id="msg" name="user_message" required placeholder="Enter text here" maxLength="500" />
        <button className="submit" type="submit">
          <FiArrowUpRight />
          Get in touch
        </button>
      </form>
    </div>
  );
}

export default Contact;
