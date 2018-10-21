// @flow

import api from '../api';

export const fetchWeatherData = () => (
  fetch(api.API_URL)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
);
