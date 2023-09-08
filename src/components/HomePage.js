import React from 'react';
import { Link } from 'react-router-dom';
// import { BiRightArrow } from 'react-icons/bi';
// import { GoArrowRight } from 'react-icons/go';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="hc">
      <h1>
        <span>HEY, I&#39;M </span>
        HARRIET OTENG!
      </h1>
      {/* <p>A Civil Engineer turned Software Developer</p> */}
      <p>
        A Full-stack Software Developer
        <br />
        with an affinity towards Front-end
      </p>
      <div className="more-links-cont">
        <Link to="/works">
          <div className="more-links">
            <FiArrowRight />
            <p>see my projects</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="more-links">
            <FiArrowRight />
            <p>more about me</p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default HomePage;
