import { FETCH_DATA_REQUEST, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from '../../common/actionTypes';
import { fetchWeatherData } from '../../services/weatherServices';

export const fetchDataError = () => (
    {
        type: FETCH_DATA_ERROR,
        payload: { error: true },
    }
);

export const fetchDataRequest = () => (
    {
        type: FETCH_DATA_REQUEST,
        payload: { isLoading: true },
    }
);

export const fetchDataSuccess = (weatherInfo) => (
    {
        type: FETCH_DATA_SUCCESS,
        payload: { weatherInfo },
    }
);

export const fetchData = (temp) => (
    (dispatch) => {
        dispatch(fetchDataRequest());
        return fetchWeatherData(temp) //'16.047079,108.206230'
            .then((weatherInfo) => {
                if(weatherInfo !== null) {
                    dispatch(fetchDataSuccess(weatherInfo))
                }
            }).catch(() => {
                dispatch(fetchDataError())
            });
    }
);