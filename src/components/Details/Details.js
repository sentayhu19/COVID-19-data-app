import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'randomized-string';
import { getCountryData } from '../../redux/covid-19/api';
import { detailStart } from '../../redux/covid-19/actions';
import './Details.css';

const Details = () => {
  const data = [];
  const location = useLocation();
  const { country } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailStart());
    dispatch(getCountryData(country));
  }, [dispatch]);
  const { view,loading } = useSelector((state) => state.covidDataReducer);
  if (loading === true) {
    return <div><img src="https://c.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" className="loading-animation" alt="loading..." /></div>;
  }
  try {
    data[0] = Object.values(view)[0];
    return (
      <div>
        {data.map((e) => (
          <div key={generate()} className="detail-data">
            <div className="covid-data">
              <span>Country :</span>
              <span key={generate()}>

                {e.name}
              </span>
            </div>
            <div className="covid-data">
              <span>Total Confirmed :</span>
              <span key={generate()}>

                {e.today_confirmed}
              </span>
            </div>
            <div className="covid-data">
              <span> Total Deaths :</span>
              <span key={generate()}>
                {e.today_deaths}
              </span>
            </div>
            <div className="covid-data">
              <span>Today New Confirmed :</span>
              <span key={generate()}>
                {e.today_new_confirmed}
              </span>
            </div>
            <div className="covid-data">
              <span>Today New Deaths :</span>
              <span key={generate()}>
                {e.today_new_deaths}
              </span>
            </div>
            <div className="covid-data">
              <span> Today New Recovered :</span>
              <span key={generate()}>
                {e.today_new_recovered}
              </span>
            </div>
            <div className="covid-data">
              <span> Yesterday New Recovered :</span>
              <span key={generate()}>
                {e.yesterday_confirmed}
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
  } catch (e) {
    console.log(e);
  }
  return '';
};
export default Details;
