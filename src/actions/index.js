import axios from 'axios';

const API_KEY = "e91a3afb648a91891465209434075ba6";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city}`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}