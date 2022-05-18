import React from 'react';
import { NavLink } from 'react-router-dom';
import './ListItem.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import covid from '../../images/covid.png';

const ListItem = ({ countries, i }) => {
  console.log(i);
  const passData = countries;
  return (
    <div className="country">
      <NavLink id={countries} to="/Details" state={{ country: passData }}>
        <img src={covid} className="mask" />
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-right" />
        <p className="country-name">{countries}</p>
      </NavLink>
    </div>
  );
};
ListItem.propTypes = {
  countries: PropTypes.string.isRequired,
};
export default ListItem;
