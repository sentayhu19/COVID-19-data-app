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
  const { countries, loading } = useSelector((state) => state.covidDataReducer);
  if (loading === true) {
    return <div><img src="https://c.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" className="loading-animation" alt="loading..." /></div>;
  }
  try {
    return (
      <>
        <img src="https://www.emeraldgrouppublishing.com/sites/default/files/styles/service_page_banner_desktop/public/image/covid-cells.jpg" alt="COVID-19" className="covid-19-pic" />
        <div className="country-list">
          {countries.map((list, i) => (
            <ListItem key={list.name} countries={list.name} i={i} />
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
