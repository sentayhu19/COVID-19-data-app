import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getDataAPI from '../redux/covid-19/api';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAPI());
  });
  return (
    <div>Home Page</div>
  );
};
export default Home;
