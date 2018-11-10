import { connect } from 'react-redux';
import WeatherComponent from '../../components/weather/weatherComponent';
import { getWeatherSelector } from '../../reducers/weatherReducer';
import { fetchData } from '../../actions/weather/weatherAction';

// const mapStateToProps = (state) => getWeatherSelector(state);

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.weather
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchData: (temp) => dispatch(fetchData(temp)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WeatherComponent);
