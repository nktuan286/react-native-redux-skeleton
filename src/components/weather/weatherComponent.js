import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert,
    TextInput
} from 'react-native';
import styles from './stylesheets/style';

class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: ''
        };
    }
    
    componentDidMount = () => {
        this.setState({
            temp: ''
        });
    }

    getErrorMessage = () => {
        return (
            <Text style={styles.errorText}>
                An Error occured when fetching data
            </Text>
        );
    }
    
    toCelsius = (f) => {
        return Math.round((5/9) * (f-32));
    }
    
    getWeatherInfo = (weatherInfo) => {
        let info = '';
        if(weatherInfo.data.data.error !== '' && weatherInfo.data.data.error !== undefined) {
            info = 'The given location is invalid';
        } else {
            const { summary, temperature } = weatherInfo.data.data.currently;
            info = temperature
            ? `Timezone: ${weatherInfo.data.data.timezone} \n ${this.toCelsius(temperature)} Celsius, ${summary}`
            : 'No Weather Info Available. Make sure you provided a valid API key.';
        }
        return (
            <Text style={styles.weatherInfoText}>
                {info}
            </Text>
        );
    };

    _onPress = () => {
        const { temp } = this.state;
        if(temp !== '') {
            this.props.fetchData(temp);
        } else {
            Alert.alert(
                'Required!',
                'Location can not empty!',
            )
        }
    }

    render() {
        const {
            isLoading,
            error,
            weatherInfo,
        } = this.props;

        const hasWeatherData = Object.keys(weatherInfo).length;
    
        return (
            <View style={styles.container}>
                {isLoading ? <ActivityIndicator /> : null}
                {error ? this.getErrorMessage() : null}
                {hasWeatherData ? this.getWeatherInfo(weatherInfo) : null}
                <TextInput style={{ margin: 10, width:200, borderColor: 'gray', borderWidth: 1, padding:2 }}
                    onChangeText={(text) => this.setState({ temp: text.trim() })}
                    value={this.state.temp}
                    placeholder='Enter location!'
                />
                <Button
                    onPress={this._onPress}
                    title='Get Weather'
                />
            </View>
        );
    }
}

WeatherComponent.propTypes = {
    error: PropTypes.bool,
    isLoading: PropTypes.bool,
    weatherInfo: PropTypes.object,
    fetchData: PropTypes.func
};

export default WeatherComponent;