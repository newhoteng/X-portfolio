import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import resume from '../Harriet_Oteng_Resume.pdf';
// import profilePic from '../images/HT2-cropped.jpg';

import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="profile-img" />
      <h1>ABOUT</h1>
      <p>
        Hi, my name is Harriet Oteng.
        I&#39;m Civil Engineer turned Software Developer from Ghana.
        I build websites that are functional, responsiveness, and beautiful to look at.
        <br />
        <br />
        My hobbies include gardening and listening to music.
      </p>
      <a className="link" href={resume} target="_blank" rel="noreferrer">
        <FiArrowDown />
        resume
      </a>
    </div>
  );
}

export default About;
