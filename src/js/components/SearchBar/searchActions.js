import axios from 'axios';

export const addCity = (cityName) => {
    return {
    type: 'ADD_CITY',
    payload: cityName
}

};
export const getWeather = (formattedCity) => ({
    type: 'GET_WEATHER',
    payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + formattedCity + '&APPID=253affd0ee9ac02467917a561aad621b')
        .then((response) => {
            let weatherDataRaw = response.data;
            return weatherDataRaw;
        })
});