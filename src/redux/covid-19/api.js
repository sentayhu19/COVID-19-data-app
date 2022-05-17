import { fetchdata, fetchdataerror } from './actions';

const axios = require('axios');

const getDataAPI = () => async (dispatch) => {
  await axios.get('https://api.covid19api.com/summary').then((res) => {
    dispatch(fetchdata(res.data.Countries));
  }).catch(() => {
    dispatch(fetchdataerror());
  });
};
export default getDataAPI;
