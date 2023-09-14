import React, { useState } from 'react';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiArrowRight } from 'react-icons/fi';

function DropDown({ ability }) {
  const [arrowIconClass, setarrowIcon] = useState('');
  const [skillDetailsClass, setskillDetails] = useState('details hidden');

  const handleArrowClick = () => {
    if (skillDetailsClass === 'details hidden') {
      setskillDetails('details visible');
      setarrowIcon('rotate');
    } else {
      setskillDetails('details hidden');
      setarrowIcon('');
    }
  };

  return (
    <div className="language-cont">
      <h2 onClick={handleArrowClick} role="presentation">
        {ability.type}
        <FiArrowRight className={arrowIconClass} />
      </h2>
      <div className={skillDetailsClass}>
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
  }).isRequired,
};

export default DropDown;
