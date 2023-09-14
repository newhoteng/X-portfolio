import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiArrowRight } from 'react-icons/fi';

function DropDown({ ability }) {
  const [arrowIconClass, setArrowIcon] = useState('');
  const [skillDetailsClass, setSkillDetails] = useState('details hidden');
  const [headerClass, setHeaderClass] = useState('');

  const handleArrowClick = () => {
    if (skillDetailsClass === 'details hidden') {
      setSkillDetails('details visible');
      setArrowIcon('rotate');
      setHeaderClass('no-underline');
    } else {
      setSkillDetails('details hidden');
      setArrowIcon('unclicked');
      setHeaderClass('');
    }
  };

  return (
    <div className="ability-cont">
      <h2 className={headerClass} onClick={handleArrowClick} role="presentation">
        {ability.type}
        <FiArrowRight className={arrowIconClass} />
      </h2>
      <div className={skillDetailsClass}>
        {ability.list.map((item) => (
          <button type="button" key={item}>{item}</button>
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
