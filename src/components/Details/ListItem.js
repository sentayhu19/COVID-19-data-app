import React from 'react';
import { NavLink } from 'react-router-dom';
import './ListItem.css';
import PropTypes from 'prop-types';

const ListItem = ({ countries }) => {
  const passData = countries;
  return (
    <div className="country">
      <NavLink id={countries} to="/Details" state={{ country: passData }}>
        <p>{countries}</p>
      </NavLink>
    </div>
  );
};
ListItem.propTypes = {
  countries: PropTypes.string.isRequired,
};
export default ListItem;
