import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// In future we can include saga here
// const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

//sagaMiddleware.run(rootSaga);