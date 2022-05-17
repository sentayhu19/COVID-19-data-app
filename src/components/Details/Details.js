import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryData } from '../../redux/covid-19/api';

const Details = () => {
  const location = useLocation();
  const { country } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryData(country));
  }, [dispatch]);
  const { view } = useSelector((state) => state.covidDataReducer);
  try {
    return (
      <div>
        <>
          <p>
            Total Confirmed :
            {Object.values(view)[0].today_confirmed}
          </p>
          <p>
            Total Deaths :
            {Object.values(view)[0].today_deaths}
          </p>
        </>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
  return '';
};
export default Details;
