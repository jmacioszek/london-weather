import { fork } from 'redux-saga/effects';
import homeState from '../scenes/home/state';

const sagas = [homeState.saga];

export default function* saga() {
  yield sagas.map(fork);
}
