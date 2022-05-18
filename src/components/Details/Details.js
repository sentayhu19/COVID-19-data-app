import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'randomized-string';
import { getCountryData } from '../../redux/covid-19/api';

const Details = () => {
  const data = [];
  const location = useLocation();
  const { country } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryData(country));
  }, [dispatch]);
  const { view } = useSelector((state) => state.covidDataReducer);
  try {
    data[0] = Object.values(view)[0];
    console.log(data);
    return (
      <div>
        {data.map((e) => (
          <div key={generate()} className="detail-data">
            <p key={generate()}>
              Country :
              {e.name}
            </p>
            <p key={generate()}>
              Total Confirmed :
              {e.today_confirmed}
            </p>
            <p key={generate()}>
              Total Deaths :
              {e.today_deaths}
            </p>
            <p key={generate()}>
              Today New Confirmed :
              {e.today_new_confirmed}
            </p>
            <p key={generate()}>
              Today New Deaths :
              {e.today_new_deaths}
            </p>
            <p key={generate()}>
              Today New Recovered :
              {e.today_new_recovered}
            </p>
            <p key={generate()}>
              Today New Recovered :
              {e.yesterday_confirmed}
            </p>
            <p key={generate()}>
              Source :
              {e.source}
            </p>
          </div>
        ))}

      </div>
    );
  } catch (e) {
    console.log(e);
  }
  return '';
};
export default Details;
