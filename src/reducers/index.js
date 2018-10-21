// @flow
import { combineReducers } from 'redux';
import weatherReducer from './weather-reducer';
import navigationReducer from './navigation-reducer';

// Root Reducer
const rootReducer = combineReducers({
  weather: weatherReducer,
  navigator: navigationReducer
});

export default rootReducer;
