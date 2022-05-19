import { fetchdata, fetchdataerror, fetchcountrydata } from './actions';

const axios = require('axios');

const getDataAPI = () => async (dispatch) => {
  await axios.get('https://api.covid19api.com/summary').then((res) => {
    dispatch(fetchdata(res.data.Countries));
  }).catch(() => {
    dispatch(fetchdataerror());
  });
};
export const getCountryData = (countryName) => (dispatch) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  axios.get(`https://api.covid19tracking.narrativa.com/api/${date}/country/${countryName}`).then((res) => {
    const incomming = res.data.dates;
    const data = Object.values(incomming)[0].countries;
    dispatch(fetchcountrydata(data));
  }).catch(() => {
    dispatch(fetchdataerror());
  });
};

export default getDataAPI;

// https://api.covid19api.com/summary
