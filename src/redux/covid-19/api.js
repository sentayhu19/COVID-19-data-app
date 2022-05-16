import axios from 'axios';
import { fetchdata } from './actions';

const Url = axios.create({ BaseURL: ' https://api.covid19tracking.narrativa.com/api/' });

const getDataAPI = () => (dispatch) => {
  Url.get('/2022/angola').then((res) => {
    console.log('From API: ', res);
    dispatch(fetchdata(res.data));
  });
};
export default getDataAPI;
