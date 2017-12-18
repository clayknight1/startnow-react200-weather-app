const defaultState = {
    weatherData: {
        name: '',
        coord: {
            lat: '',
            lon: ''
        },
        main: {
            temperature: '',
            pressure: '',
            humidity: '',
            low: '',
            high: ''
        },
        wind: '',
        searchCity: ''
    }
};

export default function cityReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_CITY': {
            return {
                ...state,
                searchCity: payload
            }
        }
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                weatherData: { ...payload }
            };
        }

        default: {
            return state;
        }
    }
}