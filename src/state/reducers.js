import { combineReducers } from 'redux';
import homeState from '../scenes/home/state';

export default combineReducers({
  home: homeState.reducer,
});
