import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="hc">
      <h1>
        <span>HEY, I&#39;M </span>
        HARRIET OTENG!
      </h1>
      <p>
        A Full-stack Software Developer
        <br />
        with an eye for details based in Ghana
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
