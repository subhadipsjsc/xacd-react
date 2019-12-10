import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

import {toggleSideMenu} from '../../../redux-elements/combineAction'

function fullSideBar(props) {
    return (
        
        <div className="fullNav"> 
            <i className="fa fa-arrow-left full_nanbar_left_arrow" onClick={props.sideMenuToggle}></i>
            <ul>
                
                <li> 
                    <NavLink to="/PMS/" exact activeClassName="active_side_menu" >
                        <i className="fa fa-dashboard"></i>&nbsp;&nbsp;Dashboard
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="/PMS/goals-comp" exact activeClassName="active_side_menu" >
                        <i className="fa fa-adjust"></i>&nbsp;&nbsp;Goals & comp
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="/PMS/performance" exact activeClassName="active_side_menu" >
                        <i className="fa fa-amazon"></i>&nbsp;&nbsp;Performance
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="/PMS/ticket" exact activeClassName="active_side_menu" >
                        <i className="fa fa-adjust"></i>&nbsp;&nbsp;Ticket
                    </NavLink>
                </li>
                
            </ul>
        </div>
        
    )
}

const mapDispatchToProps = {
    sideMenuToggle : toggleSideMenu
  }

export default connect(null,mapDispatchToProps)(fullSideBar)
