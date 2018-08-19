import { types } from './home.actions';

const INITAL_STATE = {
  isFetching: false,
  data: { main: {} },
  error: undefined,
};

const homeReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER:
      return {
        ...INITAL_STATE,
        isFetching: true,
      };
    case types.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
      };
    case types.FETCH_WEATHER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default homeReducer;
