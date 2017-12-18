import React from 'react';
import SearchBar from './components/SearchBar/index';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h1 className="display-3">Origin Weather Application</h1>
          <p className="lead"> Always know if you'll need an umbrella</p>
        </div>
        <SearchBar />
        <div className="row mt-3">
        <CityInfo />
        <SearchHistory />
        </div>
      </div>
    );
  }
}
