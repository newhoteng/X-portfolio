import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRight } from 'react-icons/fi';

function DropDown({ ability }) {
  return (
    <div className="language-cont">
      <h2>
        {ability.type}
        <FiArrowRight />
      </h2>
      <div>
        {ability.list.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

DropDown.propTypes = {
  ability: PropTypes.shape({
    type: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    // list: PropTypes.array,
  }).isRequired,
};

export default DropDown;
