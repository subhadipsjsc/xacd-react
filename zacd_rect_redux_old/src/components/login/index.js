
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './login.css';

import {auth_action_login} from '../../redux-elements/authentication/auth_action'

function loginComponent(props) {
    console.log(props);
    
    const handleloginAction = () =>{
        let previous_path = {
            pathname :  props.location.pathname,
            query_parametrs : props.location.search,
        }
        props.loginAction(previous_path);
    };
    
    
    return (
        <div className="login_main">
            <img src="logo.png" className="" alt="logo"></img>
            <p className="login_sign" align="center">Sign in</p>

            <input type="text" className="login_un"  align="center" placeholder="Username" required />
            <input type="password" className="login_pass"  align="center" placeholder="Password" required />
            <button type="button" className="login_submit" onClick={handleloginAction}>Submit</button>
            <p className="login_forgot" align="center">
                <NavLink to="/forgotPassword" exact >Forgot Password?</NavLink>
            </p>

        </div>

    )
}


const mapDispatchToProps = {
    loginAction: auth_action_login
   
}


export default  connect (null, mapDispatchToProps)(loginComponent);
