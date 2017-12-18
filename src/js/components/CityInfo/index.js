import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return {
        weatherData: store.cityReducer.weatherData
    };
}

export default connect(mapStoreToProps)(CityInfo)