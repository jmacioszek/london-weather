import { take, call, put } from 'redux-saga/effects';
import { types, actions } from './home.actions';
import axios from 'axios';

const URL =
  'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=c3c31c4af98a2eb36d40a48e4f5d56a6';

function* saga() {
  while (true) {
    yield take(types.FETCH_WEATHER);
    const { data } = yield call(axios.get, URL);
    if (data) {
      yield put(actions.fetchWeatherSuccess({ data }));
    } else {
      yield put(actions.fetchWeatherFailed({ error: 'Something went wrong' }));
    }
  }
}

export default saga;
