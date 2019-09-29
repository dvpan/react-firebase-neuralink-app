import { createStore, compose, applyMiddleware } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import fbConfig from '../config/fbConfig';

const middleware = [
    thunk.withExtraArgument({ getFirestore }),
    logger,
];

const store = () => createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        reduxFirestore(fbConfig),
    ),
);

export default store;
