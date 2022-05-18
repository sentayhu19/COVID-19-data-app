import {
  FETCHDATA, FETCHDATAERROR, FETCHCOUNTRYDATA, SORT, DETAILSTART
} from './actions';

const initState = {
  countries: [],
  loading: true,
  error: true,
  view: [],
};
const covidDataReducer = (state = initState, action) => {
  const data = action.payload;
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
        loading: false,
      };
    case SORT:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
      case DETAILSTART:
        return{
        ...state,
        loading:true,
      }
    default:
      return state;
  }
};
export default covidDataReducer;
