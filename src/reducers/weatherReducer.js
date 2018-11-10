import {
    FETCH_DATA_ERROR,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
} from '../common/actionTypes';

const initialState = {
    weatherInfo: {},
    isLoading: false,
    error: false,
};

// export const getWeatherSelector = (state) => ({ ...state.weather });

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: false,
                weatherInfo: action.payload.weatherInfo,
            };
        }
        case FETCH_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: false,
                weatherInfo: {},
            };
        }
        case FETCH_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        }
        default: {
            return state;
        }
    }
};

export default weatherReducer;
