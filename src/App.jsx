import React from 'react';
import { useMobileDetector } from 'hooks/useMobileDetector';
import firebase from 'firebase/app'
import createReduxStore from './store/createReduxStore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createFirestoreInstance } from 'redux-firestore';

import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import HeaderComponent from './components/Header/HeaderComponent';
import Home from './components/Home/Home';
import SidebarComponent from './components/Dashboard/Sidebar/SidebarComponent';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/SignUp';
import HealthTab from './components/Dashboard/Health/HealthTab';
import Emulator from './components/Emulator/Emulator';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import requiresAuth from 'components/requiresAuth';
import i18n from "./i18n";

const store = createReduxStore();

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

const App = () => {
    const { mobile } = useMobileDetector(768);

    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <BrowserRouter>
                    <div id="main-container">
                        <HeaderComponent mobile={mobile} />
                        <div id="main-content">
                            <SidebarComponent mobile={mobile} />

                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/signin" component={SignIn} />
                                <Route path="/signup" component={SignUp} />

                                <Route path="/emulator" component={requiresAuth(Emulator)} />

                                <Route exact path="/dashboard/" component={requiresAuth(Dashboard)} />
                                <Route path="/dashboard/health" component={requiresAuth(HealthTab)} />

                                <Route component={PageNotFound} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </BrowserRouter>
            </ReactReduxFirebaseProvider>
        </Provider>

    )
}

export default App;