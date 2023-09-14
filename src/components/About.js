import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import DropDown from './Ability';
import resume from '../Harriet_Oteng_Resume.pdf';

import '../styles/About.css';

function About() {
  const abilities = [
    { type: 'LANGUAGES', list: ['JavaScript', 'Ruby', 'Python'] },
    { type: 'FRAMEWORKS', list: ['React', 'Ruby on Rails', 'Django'] },
    { type: 'WEB DEVELOPMENT', list: ['HTML', 'CSS'] },
    { type: 'DATABASE MANAGEMENT', list: ['PostgreSQL', 'MySQL'] },
    { type: 'TOOLS & METHODS', list: ['Git', 'GitHub', 'TDD', 'Chrome Dev Tools', 'Agile', 'Waterfall', 'Slack'] },
    { type: 'PROFESSIONAL SKILLS', list: ['Remote Pair-Programming', 'Teamwork', 'Project Management', 'Communication', 'Problem Solving', 'Mentoring'] },
  ];

  return (
    <div className="about-container">
      <div>
        <div className="profile-img" />
        <h1>ABOUT</h1>
        <p>
          Hi, my name is Harriet Oteng.
          I&#39;m Civil Engineer turned Software Developer from Ghana.
          I build websites that are functional, responsiveness, and beautiful to look at.
          <br />
          My hobbies include gardening and listening to music.
        </p>
        <a className="link" href={resume} target="_blank" rel="noreferrer">
          <FiArrowDown />
          resume
        </a>
      </div>
      <div className="abilities-cont">
        {abilities.map((ability) => (
          <DropDown key={ability.type} ability={ability} />
        ))}
      </div>
    </div>
  );
}

export default About;
