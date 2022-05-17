import { FETCHDATA, FETCHDATAERROR, FETCHCOUNTRYDATA } from './actions';

const initState = {
  countries: {
    countries: [],
    loading: true,
    error: true,
    view: [],
  },
};
const covidDataReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHDATA:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case FETCHDATAERROR:
      return {
        ...state,
        error: true,
      };
    case FETCHCOUNTRYDATA:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};
export default covidDataReducer;
