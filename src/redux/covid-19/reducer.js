import { FETCHDATA, FETCHDATAERROR } from './actions';

const initState = {
  countries: {
    countries: [],
    loading: true,
    error: true,
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
    default:
      return state;
  }
};
export default covidDataReducer;
