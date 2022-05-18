import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDataAPI from '../../redux/covid-19/api';
import ListItem from '../Details/ListItem';
import { search } from '../../redux/covid-19/actions';
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
  let data;
  const handleSearch = (e) => {
    let sorted;
    console.log(e.target.value);
    // const searchResult = countries.filter((c) => c.name === e.target.value.trim());
    if (e.target.value === 'a-z') {
      sorted = countries.sort((a, b) => a.name.localeCompare(b.name));
    } else if(e.target.value === 'z-a') {
      sorted = countries.sort((a, b) => b.name.localeCompare(a.name));
    }
    else{
      dispatch(getDataAPI());
    }
    dispatch(search(sorted));
  };

  try {
    return (
      <>
        <img src="https://www.emeraldgrouppublishing.com/sites/default/files/styles/service_page_banner_desktop/public/image/covid-cells.jpg" alt="COVID-19" className="covid-19-pic" />
        <div className="sort-wrap">
          <div className="sort-l1">
            <span className="sort-title">Sort By Country Name</span>
            <select className="sort" onChange={handleSearch}>
              <option value='sort'>Sort</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
        </div>
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
