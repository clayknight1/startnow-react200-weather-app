import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return {
        searchCity: store.cityReducer.searchCity
    };
}

export default connect(mapStoreToProps)(SearchBar)