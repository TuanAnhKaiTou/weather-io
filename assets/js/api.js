/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright anhnt 2023 All rights reserved
 */

"use strict";

const api_key = "837d5a0a4c2738fe422fb06d404bc2bc";
const api_url = "https://api.openweathermap.org";
const data_url = `${api_url}/data/2.5`;

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `${data_url}/weather?${lat}&${lon}&units=metric`;
  },

  forecast(lat, lon) {
    return `${data_url}/forecast?${lat}&${lon}&units=metric`;
  },

  airPollution(lat, lon) {
    return `${data_url}/air_pollution?${lat}&${lon}`;
  },

  reverseGeo(lat, lon) {
    return `${api_url}/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },

  /**
   * @param {string} query Search query e.g.: "London", "New York"
   */
  geo(query) {
    return `${api_url}/geo/1.0/direct?q=${query}&limit=5`;
  },
};
