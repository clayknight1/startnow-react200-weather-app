import React from 'react';

function convertToFarenheit(kelvins) {
    return Math.round((kelvins * 9/5) -459.67);
}


export default class CityInfo extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const { weatherData } = this.props;
        console.log(this.props)
        return (
            <div className="col-sm">
                <div className="card">
                    <div className="card-header">
                        City Information
                    </div>
                    <div className="card-body text-center">

                        <h4 className="card-title">
                            <i className="fa fa-cloud" aria-hidden="true"></i>{ weatherData.name }</h4>
                        <p>Lat/Lon: { weatherData.coord.lat }, { weatherData.coord.lon  }</p>
                        <hr className="my-4" />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h6>Temperature(F)</h6>
                                    <p>{ convertToFarenheit(weatherData.main.temp) }</p>
                                </div>
                                <div className="col-sm">
                                    <h6>Pressure</h6>
                                    <p>{ weatherData.main.pressure }</p>
                                </div>
                                <div className="col-sm">
                                    <h6>Humidity</h6>
                                    <p>{ weatherData.main.humidity + "%" }</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <h6>Lowest Temp(F)</h6>
                                <p>{ convertToFarenheit(weatherData.main.temp_min) }</p>
                            </div>
                            <div className="col-sm">
                                <h6>Highest Temp(F)</h6>
                                <p>{ convertToFarenheit(weatherData.main.temp_max) }</p>
                            </div>
                            <div className="col-sm">
                                <h6>Wind Speed</h6>
                                <p>{ weatherData.wind.speed }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}