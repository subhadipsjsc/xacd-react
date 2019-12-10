import React from 'react';


import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'

import Header from './components/header_footer/header';
import Footer from './components/header_footer/footer';

import Notfound from './components/notFound/index'
import Home from './components/home/index';
import Pms from './components/pms/index';
import Onboarding from './components/onboarding/index';
import Enps from './components/enps/index';
import Login from './components/login/index'





function App(props) {
    console.log(props.logged_in)

    if (props.logged_in) {
        return (
            <Router>
               <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/pms" component={Pms} />
    
                    {/* <Route path="/pms" component={Pms} /> */}
                    <Route path="/onboarding" component={Onboarding} />
                    <Route path="/enps" component={Enps} />
                    
                    <Route exact path="/login" component={Login} />
                    <Route component={Notfound} />
                   
                </Switch>
                <Footer/>
            </Router>
            
        )
        
    } 
    else {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route component={Login} />                   
                </Switch>                
            </Router>
            
        ) 
    }
    
}
const mapStateToProps = (state) => {
    return {
        logged_in: state.session
    };
};

export default  connect(mapStateToProps)(App);
