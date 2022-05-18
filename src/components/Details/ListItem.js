import React from 'react';
import { NavLink } from 'react-router-dom';
import './ListItem.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import covid from '../../images/covid.png';

const ListItem = ({ countries }) => {
  const passData = countries;
  return (
    <div className="country">
      <div>
        <NavLink id={countries} to="/Details" state={{ country: passData }}>
          <img src={covid} className="mask" alt="COVID-19" />
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-right" />
          <p className="country-name">{countries}</p>
        </NavLink>
      </div>
    </div>
  );
};
ListItem.propTypes = {
  countries: PropTypes.string.isRequired,
};
export default ListItem;
