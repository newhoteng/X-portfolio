import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import DropDown from './Ability';
import resume from '../Harriet_Oteng_Resume.pdf';

import '../styles/About.css';

function About() {
  const abilities = [
    { type: 'STACK', list: ['JavaScript', 'Ruby', 'Python', 'React', 'Ruby on Rails', 'Django', 'HTML', 'CSS', 'PostgreSQL'] },
    { type: 'TOOLS & METHODS', list: ['Git', 'GitHub', 'Slack', 'TDD', 'Chrome Dev Tools', 'Agile', 'Waterfall'] },
    { type: 'PROFESSIONAL SKILLS', list: ['Remote Pair-Programming', 'Teamwork', 'Project Management', 'Communication', 'Problem Solving', 'Mentoring'] },
  ];

  return (
    <div className="about-container">
      <div className="about-text">
        <div className="profile-img" />
        <h1>ABOUT</h1>
        <p>
          Hi, my name is Harriet Oteng.
          I&#39;m Civil Engineer turned Software Developer from Ghana.
          I build websites that are functional, responsiveness, and aesthetically pleasing.
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
