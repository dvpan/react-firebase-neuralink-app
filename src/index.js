import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import SplashScreen from 'components/SplashScreen/SplashScreen';

import './index.css';
import './App.css';

const App = React.lazy(() => import('App'));

ReactDOM.render(
    <Suspense fallback={<SplashScreen />}>
        <App />
    </Suspense>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();