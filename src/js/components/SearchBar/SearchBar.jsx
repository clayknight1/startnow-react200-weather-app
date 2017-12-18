import React from 'react';

import {
    addCity,
    getWeather
} from './searchActions';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleSearchSubmission = this.handleSearchSubmission.bind(this);
        this.handleStaticButton = this.handleStaticButton.bind(this);
    }

    handleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(addCity(value));
    }

    handleSearchSubmission() {
        const { searchCity, dispatch } = this.props;
        const formattedCity = searchCity.replace(' ', '+');
        dispatch(getWeather(formattedCity));
        console.log(5,formattedCity);
    }

    handleStaticButton(event) {
        const { dispatch } = this.props;
        const staticCity = event.target.id;
        dispatch(getWeather((staticCity)));
    }

    render() {
        const { searchCity } = this.props;
        console.log(4, searchCity)
        return (
            <div>
                <div className="btn-group" role="group">
                    <button type="button" id="tijuana" className="btn btn-secondary" onClick={this.handleStaticButton}>Tijuana</button>
                    <button type="button" id="burgen" className="btn btn-secondary" onClick={this.handleStaticButton}>Burgen</button>
                    <button type="button" id="sydney" className="btn btn-secondary" onClick={this.handleStaticButton}>Sydney</button>
                    <button type="button" id="dublin" className="btn btn-secondary" onClick={this.handleStaticButton}>Dublin</button>
                </div>
                <div className="input-group mt-1">
                    <span className="input-group-btn">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.handleSearchSubmission}
                        >Search
                        </button>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        id="city-input"
                        value={ searchCity }
                        onChange={ this.handleCityInput }
                        placeholder="Enter City..." />
                </div>
            </div>
        );
    }
}