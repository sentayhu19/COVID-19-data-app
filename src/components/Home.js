import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDataAPI from '../redux/covid-19/api';
import Details from './Details/Details';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAPI());
  }, [dispatch]);
  const { countries, loading, error } = useSelector((state) => state.covidDataReducer);
  if (countries.length > 0) {
    return (
      <div>
        {countries.map((list) => (
          <Details key={list.Country} countries={list.Country} />
        ))}
      </div>
    );
  }
  return '';
};
export default Home;

// NewConfirmed={c.NewConfirmed}
//              NewDeaths={c.NewDeaths} TotalConfirmed={c.TotalConfirmed}
//               TotalDeaths={c.TotalDeaths} TotalRecovered={c.TotalRecovered}
