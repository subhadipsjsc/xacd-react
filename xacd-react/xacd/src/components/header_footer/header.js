import React from 'react'
import { NavLink } from 'react-router-dom'

function header() {
    return (
        <div>
            <header>
                <h2 class="logo">Brand</h2>
                <div class="menu">
                    <ul>
                        <li> <NavLink to="/" exact activeClassName="active-header-menu" >Home</NavLink> </li>
                        <li> <NavLink to="/PMS" activeClassName="active-header-menu">PMS</NavLink> </li>
                        <li> <NavLink to="/ONBOARDING" activeClassName="active-header-menu">ONBOARDING </NavLink></li>
                        <li> <NavLink to="/eNPS" activeClassName="active-header-menu">eNPS </NavLink></li>
                        <li><a href="/">Logout</a></li>
                        <li><a href="/"><i class="fa fa-bell"></i><sup>2</sup></a></li>
                    </ul>
                </div>                   

            </header>
        </div>
    )
}

export default header
