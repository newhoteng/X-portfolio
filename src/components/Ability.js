import React from 'react';
import PropTypes from 'prop-types';

function DropDown({ ability }) {
  return (
    <div className="ability-cont">
      <h2 className="">
        {ability.type}
      </h2>
      <div className="details">
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
