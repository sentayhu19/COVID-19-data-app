import covidDataReducer from '../redux/covid-19/reducer';

const mockData = [{
  Country: 'Afghanistan',
  CountryCode: 'AF',
  Date: '2022-05-19T15:44:34.63Z',
  ID: '6adf93a3-a0bd-435f-b296-46c612da72c2',
  NewConfirmed: 0,
  NewDeaths: 0,
  NewRecovered: 0,
  Premium: {},
  Slug: 'afghanistan',
  TotalConfirmed: 179477,
  TotalDeaths: 7691,
  TotalRecovered: 0,
}, {
  Country: 'Denmark',
  CountryCode: 'DK',
  Date: '2022-05-19T15:44:34.63Z',
  ID: '0c659841-6d62-4e07-989c-c2790219c58e',
  NewConfirmed: 0,
  NewDeaths: 0,
  NewRecovered: 0,
  Premium: {},
  Slug: 'denmark',
  TotalConfirmed: 3176917,
  TotalDeaths: 6353,
  TotalRecovered: 0,
},
];
const toget = {
  0:
{
  Country: 'Afghanistan',
  CountryCode: 'AF',
  Date: '2022-05-19T15:44:34.63Z',
  ID: '6adf93a3-a0bd-435f-b296-46c612da72c2',
  NewConfirmed: 0,
  NewDeaths: 0,
  NewRecovered: 0,
  Premium: {},
  Slug: 'afghanistan',
  TotalConfirmed: 179477,
  TotalDeaths: 7691,
  TotalRecovered: 0,
},
  1:
  {
    Country: 'Denmark',
    CountryCode: 'DK',
    Date: '2022-05-19T15:44:34.63Z',
    ID: '0c659841-6d62-4e07-989c-c2790219c58e',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Premium: {},
    Slug: 'denmark',
    TotalConfirmed: 3176917,
    TotalDeaths: 6353,
    TotalRecovered: 0,
  },
  back: false,
  countries: [
    {
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Date: '2022-05-19T15:44:34.63Z',
      ID: '6adf93a3-a0bd-435f-b296-46c612da72c2',
      NewConfirmed: 0,
      NewDeaths: 0,
      NewRecovered: 0,
      Premium: {},
      Slug: 'afghanistan',
      TotalConfirmed: 179477,
      TotalDeaths: 7691,
      TotalRecovered: 0,
    },
    {
      Country: 'Denmark',
      CountryCode: 'DK',
      Date: '2022-05-19T15:44:34.63Z',
      ID: '0c659841-6d62-4e07-989c-c2790219c58e',
      NewConfirmed: 0,
      NewDeaths: 0,
      NewRecovered: 0,
      Premium: {},
      Slug: 'denmark',
      TotalConfirmed: 3176917,
      TotalDeaths: 6353,
      TotalRecovered: 0,
    }],
  loading: false,
};
describe('Testing For an Empty on Initial ', () => {
  test('init State', () => {
    expect(covidDataReducer([], [])).toEqual([]);
  });
});

describe('Testing For reducer on Mock Data', () => {
  test('Reducer tesing for Mock Data', () => {
    const FETCHDATA = 'covid-19-data-app/action/FETCHDATA';
    const action = {
      type: FETCHDATA,
      payload: mockData,
    };
    expect(covidDataReducer(mockData, action)).toEqual(toget);
  });
});
