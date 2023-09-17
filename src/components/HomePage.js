import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="hc">
      <h1>
        <span>HI THERE, I&#39;M </span>
        HARRIET OTENG!
      </h1>
      <p>
        A Full-stack Software Developer
        <br />
        with a keen eye for details.
      </p>
      <div className="more-links-cont">
        <Link className="link" to="/works">
          <div className="more-links">
            <FiArrowRight />
            <p>see my projects</p>
          </div>
        </Link>
        <Link className="link" to="/about">
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
