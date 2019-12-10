import React from 'react'
import { NavLink } from 'react-router-dom'

function header() {
    return (
        <div>
            <header>
                <h2 className="logo">Brand</h2>
                <div className="menu">
                    <ul>
                        <li> <NavLink to="/" exact activeClassName="active_header_menu" >Home</NavLink> </li>
                        <li> <NavLink to="/pms" activeClassName="active_header_menu">PMS</NavLink> </li>
                        <li> <NavLink to="/onboarding" activeClassName="active_header_menu">ONBOARDING </NavLink></li>
                        <li> <NavLink to="/enps" activeClassName="active_header_menu">eNPS </NavLink></li>
                        <li><a href="/">Logout</a></li>
                        <li><a href="/"><i className="fa fa-bell"></i><sup>2</sup></a></li>
                    </ul>
                </div>                   

            </header>
        </div>
    )
}

export default header
