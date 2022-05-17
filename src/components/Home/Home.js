import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDataAPI from '../../redux/covid-19/api';
import ListItem from '../Details/ListItem';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAPI());
  }, [dispatch]);
  const { countries, loading, error } = useSelector((state) => state.covidDataReducer);
  try {
    return (
      <>
        {loading ? <h1>LOADING...</h1> : ''}
        <img src="https://www.emeraldgrouppublishing.com/sites/default/files/styles/service_page_banner_desktop/public/image/covid-cells.jpg" alt="COVID-19" className="covid-19-pic" />
        <div className="country-list">
          {countries.map((list) => (
            <ListItem key={list.name} countries={list.name} />
          ))}
        </div>
      </>
    );
  } catch (e) {
    console.log('CATCHED', e);
  }
  return '';
};

export default Home;

// NewConfirmed={c.NewConfirmed}
//              NewDeaths={c.NewDeaths} TotalConfirmed={c.TotalConfirmed}
//               TotalDeaths={c.TotalDeaths} TotalRecovered={c.TotalRecovered}
