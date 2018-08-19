const types = {
  FETCH_WEATHER: 'weather/FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS: 'weather/FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_STARTED: 'weather/FETCH_WEATHER_STARTED',
  FETCH_WEATHER_FAILED: 'weather/FETCH_WEATHER_FAIKED',
};

const fetchWeather = () => ({
  type: types.FETCH_WEATHER,
});

const fetchWeatherSuccess = ({ data }) => ({
  type: types.FETCH_WEATHER_SUCCESS,
  payload: {
    data,
  },
});

const fetchWeatherFailed = ({ error }) => ({
  type: types.FETCH_WEATHER_FAILED,
  payload: {
    error,
  },
});

const actions = {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherFailed,
};

export { actions, types };
