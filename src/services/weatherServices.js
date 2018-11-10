import axios from '../common/axiosConfig';

export const fetchWeatherData = (temp) => {
    return axios({
        method: 'post',
        url: 'fetch-weather',
        data: {
            temp: temp
        }
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error
    });
}