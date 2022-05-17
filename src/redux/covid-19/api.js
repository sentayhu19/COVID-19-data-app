import { fetchdata, fetchdataerror } from './actions';

const axios = require('axios');

const getDataAPI = () => async (dispatch) => {
  await axios.get('https://api.covid19tracking.narrativa.com/api/countries').then((res) => {
    console.log('After GET: ', res.data);
    dispatch(fetchdata(res.data.countries));
  }).catch(() => {
    dispatch(fetchdataerror());
  });
};
export default getDataAPI;

// https://api.covid19api.com/summary
