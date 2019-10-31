import React from 'react';


import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';

import Notfound from './components/notFound/index'
import Home from './components/home/index';
import Pms from './components/PMS/index';
import Onboarding from './components/ONBOARDING/index';
import Enps from './components/eNPS/index';





function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/PMS" component={Pms} />
                <Route path="/ONBOARDING" component={Onboarding} />
                <Route path="/eNPS" component={Enps} />
                <Route component={Notfound} />
            </Switch>
            <Footer/>
        </Router>
        
    )
}

export default App
