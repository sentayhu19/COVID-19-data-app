import thunk from 'redux-thunk';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import covidDataReducer from './covid-19/reducer';

const initState = {};
const rootredcuer = combineReducers({
  covidDataReducer,
});
const store = createStore(rootredcuer, initState, applyMiddleware(thunk));
export default store;
