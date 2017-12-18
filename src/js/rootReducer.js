import { combineReducers } from 'redux';
import cityReducer from './components/SearchBar/searchReducer';

const rootReducer = combineReducers({
    cityReducer: cityReducer
});

export default rootReducer;
