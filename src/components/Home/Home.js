import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDataAPI from '../../redux/covid-19/api';
import ListItem from '../Details/ListItem';
import './Home.css';
import { sort } from '../../redux/covid-19/actions';
import covid19 from '../../images/covid19.jpg';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAPI());
  }, []);
  const { countries, loading, error } = useSelector((state) => state.covidDataReducer);
  if (loading === true) {
    return <div><img src="https://c.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" className="loading-animation" alt="loading..." /></div>;
  }
  if (error === true) {
    return <div className="error">Network Error, Try Refreshing page</div>;
  }
  const handleSearch = (e) => {
    let sorted;
    if (e.target.value === 'a-z') {
      sorted = countries.sort((a, b) => a.Country.localeCompare(b.Country));
    } else if (e.target.value === 'z-a') {
      sorted = countries.sort((a, b) => b.Country.localeCompare(a.Country));
    } else if (e.target.value === 'asc') {
      sorted = countries.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
    } else if (e.target.value === 'dsc') {
      sorted = countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    } else {
      dispatch(getDataAPI());
    }
    dispatch(sort(sorted));
  };
  let globalConf = 0;
  countries.forEach((e) => {
    globalConf += e.TotalConfirmed;
  });
  return (
    <>
      <div className="header">
        <img src={covid19} alt="COVID-19" className="covid-19-pic" />
        <h2 className="global-info">
          Todays Global Confirmed
          {' '}
          <br />
          {' '}
          {(globalConf).toLocaleString('en-US')}
        </h2>
      </div>
      <div className="sort-wrap">
        <div className="sort-l1">
          <span className="sort-title">Sort By Country Name</span>
          <select className="sort" onChange={handleSearch}>
            <option value="sort">Sort</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="asc">Asc. Total Confirmed</option>
            <option value="dsc">Dsc. Total Confirmed</option>
          </select>
        </div>
      </div>
      <div className="country-list">
        {countries.map((list) => (
          <ListItem
            key={list.Country}
            countries={list.Country}
            TotalConfirmed={list.TotalConfirmed}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
