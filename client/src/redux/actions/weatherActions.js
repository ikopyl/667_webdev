import axios from 'axios';

import {SEARCH_WEATHER} from './types';

export const searchWeather = (searchCity, searchState) => dispatch => {
  console.log('action called: searchWeather', searchCity, searchState);

  const endpoint = `/weather?city=${searchCity}`;
  return axios
    .get(endpoint)
    .then(res => {
      const weatherData = res.data.response;
      console.log('weatherAction.js response from endpoint: ', weatherData.consolidated_weather[0]);
      dispatch({
        type: SEARCH_WEATHER,
        payload: weatherData,
        searchCity,
        searchState,
        weather_icon_source: "https://www.metaweather.com/static/img/weather/" +
          weatherData.consolidated_weather[0].weather_state_abbr +
          ".svg",
      });
    })
    .catch(err => {
      console.log(err);
    });

};
