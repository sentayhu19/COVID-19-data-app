const FETCHDATA = 'covid-19-data-app/action/FETCHDATA';
const FETCHDATAERROR = 'covid-19-data-app/action/FETCHDATAERROR';

export const fetchdata = () => ({
  type: FETCHDATA,
});
export const fetchdataerror = () => ({
  type: FETCHDATAERROR,
});
