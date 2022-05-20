import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'randomized-string';
import { getCountryData } from '../../redux/covid-19/api';
import { detailStart } from '../../redux/covid-19/actions';
import './Details.css';

const axios = require('axios');

const Details = () => {
  const [flag, setFlag] = useState();
  const data = [];
  const location = useLocation();
  const { country } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailStart());
    if (country === 'United States of America') {
      dispatch(getCountryData('US'));
    }
    dispatch(getCountryData(country));
  }, [dispatch]);
  const { view, loading, error } = useSelector((state) => state.covidDataReducer);
  if (loading === true || Object.values(view)[0] === undefined) {
    return <div><img src="https://c.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" className="loading-animation" alt="loading..." /></div>;
  }
  if (error === true) {
    return <div className="error">Network Error, Try Refreshing page</div>;
  }
  axios.get(`https://restcountries.com/v3.1/name/${country}`).then((res) => {
    setFlag(res.data[0].flags.svg);
  });

  data[0] = Object.values(view)[0];
  return (
    <div className="detail-data-wrap">
      <img src={flag} alt="flag" className="flag" />
      {data.map((e) => (
        <div key={generate()} className="detail-data">
          <div className="covid-data">
            <span>Country :</span>
            <span key={generate()}>
              {e.name}
            </span>
          </div>
          <div className="covid-data">
            <span>Today Confirmed :</span>
            <span key={generate()}>
              {(e.today_confirmed).toLocaleString('en-US')}
            </span>
          </div>
          <div className="covid-data">
            <span> Total Deaths :</span>
            <span key={generate()}>
              {(e.today_deaths).toLocaleString('en-US')}
            </span>
          </div>
          <div className="covid-data">
            <span>Today New Confirmed :</span>
            <span key={generate()}>
              {(e.today_new_confirmed).toLocaleString('en-US')}
            </span>
          </div>
          <div className="covid-data">
            <span>Today New Deaths :</span>
            <span key={generate()}>
              {(e.today_new_deaths).toLocaleString('en-US')}
            </span>
          </div>
          <div className="covid-data">
            <span> Today New Recovered :</span>
            <span key={generate()}>
              { (e.today_new_recovered).toLocaleString('en-US')}
            </span>
          </div>
          <div className="covid-data">
            <span> Yesterday Confirmed :</span>
            <span key={generate()}>
              {(e.yesterday_confirmed).toLocaleString('en-US')}
            </span>
          </div>
          <div className="covid-data">
            <span>
              Source :
            </span>
            <span key={generate()}>
              {e.source}
            </span>
          </div>
        </div>
      ))}

    </div>
  );
};
export default Details;
