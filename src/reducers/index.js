import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import navigationReducer from './navigationReducer';
import authReducer from './authReducer';

// Root Reducer
const rootReducer = combineReducers({
    weather: weatherReducer,
    auth: authReducer,
    navigator: navigationReducer
});

export default rootReducer;
