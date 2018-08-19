import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/state/reducers';
import sagas from './src/saga/saga';
import Home from './src/scenes/home';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
