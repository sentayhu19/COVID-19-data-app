import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

import './navigation.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" className="back-to-home">Back</NavLink>
    <h2 className="title">COVID-19 Data</h2>
    <div className="mic-gear">
      <FontAwesomeIcon icon={faMicrophone} className="mic" />
      <FontAwesomeIcon icon={faGear} className="gear" />
    </div>
  </nav>
);
export default Navigation;
