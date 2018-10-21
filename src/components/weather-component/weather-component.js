// @flow

import React from 'react';
import {
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert
} from 'react-native';
import styles from './styles';

type Props = {
    error: boolean,
    isLoading: boolean,
    weatherInfo: Object,
    fetchData: Function,
}

const getErrorMessage = () => (
    <Text style={styles.errorText}>
        An Error occured when fetching data
    </Text>
);

function toCelsius(f) {
    return Math.round((5/9) * (f-32));
}

const getWeatherInfo = (weatherInfo) => {
    const { summary, temperature } = weatherInfo.currently;
    const info = temperature
        ? `Timezone: ${weatherInfo.timezone} \n ${toCelsius(temperature)} Celsius, ${summary}`
        : 'No Weather Info Available. Make sure you provided a valid API key in the `api` file.';

    return (
        <Text style={styles.weatherInfoText}>
            {info}
        </Text>
    );
};

const WeatherComponent = (props) => {
    const {
        isLoading,
        error,
        fetchData,
        weatherInfo,
    } = props;
    const hasWeatherData = Object.keys(weatherInfo).length;

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : null}
            {error ? getErrorMessage() : null}
            {hasWeatherData ? getWeatherInfo(weatherInfo) : null}
            <Button
                onPress={fetchData}
                title='Get Weather'
            />
        </View>
    );
};

export default WeatherComponent;
