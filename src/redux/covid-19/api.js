import { fetchdata, fetchdataerror, fetchcountrydata } from './actions';

const axios = require('axios');

const getDataAPI = () => async (dispatch) => {
  await axios.get('https://api.covid19tracking.narrativa.com/api/countries').then((res) => {
    dispatch(fetchdata(res.data.countries));
  }).catch(() => {
    dispatch(fetchdataerror());
  });
};
export const getCountryData = (countryName) => (dispatch) => {
  console.log('fetching from API: ', countryName);
  axios.get(`https://api.covid19tracking.narrativa.com/api/2021-03-22/country/${countryName}`).then((res) => {
    const incomming = res.data.dates;
    const data = Object.values(incomming)[0].countries;
    dispatch(fetchcountrydata(data));
  });
};

export default getDataAPI;

// https://api.covid19api.com/summary
