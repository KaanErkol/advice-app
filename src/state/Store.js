import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Sagas from './sagas/Sagas';
import Reducers from './reducers/Reducers';

export default () => {
    
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(Reducers, applyMiddleware(sagaMiddleWare))
  sagaMiddleWare.run(Sagas);

  return store;
}