import React from 'react';
import { Link } from 'react-router-dom';
import { BiRightArrow } from 'react-icons/bi';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="hc">
      <h1>
        <span>HEY, I&#39;M </span>
        HARRIET!
      </h1>
      {/* <p>A Civil Engineer turned Software Developer</p> */}
      <p>A Fullstack Software Developer with an affinity towards Frontend</p>
      <div className="more-links-cont">
        <Link to="/works">
          <div className="more-links">
            <BiRightArrow />
            <p>see my projects</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="more-links">
            <BiRightArrow />
            <p>more about me</p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default HomePage;
