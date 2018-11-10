import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import navigationReducer from './navigationReducer';

// Root Reducer
const rootReducer = combineReducers({
    weather: weatherReducer,
    navigator: navigationReducer
});

export default rootReducer;
