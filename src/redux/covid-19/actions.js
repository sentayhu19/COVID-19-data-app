export const FETCHDATA = 'covid-19-data-app/action/FETCHDATA';
export const FETCHDATAERROR = 'covid-19-data-app/action/FETCHDATAERROR';
export const FETCHCOUNTRYDATA = 'covid-19-data-app/action/FETCHCOUNTRYDATA';

export const fetchdata = (payload) => ({
  type: FETCHDATA,
  payload,
});
export const fetchdataerror = () => ({
  type: FETCHDATAERROR,
});
export const fetchcountrydata = (payload) => ({
  type: FETCHCOUNTRYDATA,
  payload,
});
