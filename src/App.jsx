import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import HeaderComponent from './components/Header/HeaderComponent';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/SignUp';
import HealthTab from './components/Dashboard/Health/HealthTab';
import Emulator from './components/Emulator/Emulator';

import requiresAuth from 'components/requiresAuth';

import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Suspense fallback={<div>Загрузка...</div>}>

        <div id="main-container">
          <HeaderComponent />
          <div id="main-content">
            <Sidebar />

            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />

            <Route path="/emulator" component={requiresAuth(Emulator)} />

            <Route exact path="/dashboard/" component={requiresAuth(Dashboard)} />
            <Route path="/dashboard/health" component={requiresAuth(HealthTab)} />
          </div>
          <Footer />
        </div>

      </Suspense>
    </BrowserRouter>
  );
}

export default App;
