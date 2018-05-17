import axios from 'axios';

// Info to make reuest for weather api
const API_KEY = '9d874a224d2ff174a354dbad9a1c3e5c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Action types
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Featch weather data action creator
export function featchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // axios returns a promise

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}