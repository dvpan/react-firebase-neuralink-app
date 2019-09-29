import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import healthReducer from './healthReducer';
import healthFilterReducer from './healthFilterReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    health: healthReducer,
    healthFilter: healthFilterReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
