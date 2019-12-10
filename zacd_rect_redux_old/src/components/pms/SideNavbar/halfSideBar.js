import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

import {toggleSideMenu} from '../../../redux-elements/combineAction'

function halfSideBar(props) {
    return (
        
        <div className="halfNav"> 
            <i className="fa fa-arrow-right half_nanbar_left_arrow" onClick={props.sideMenuToggle} ></i>
            <ul>
                
                <li> 
                    <NavLink to="/PMS/" exact activeClassName="active_side_menu" >
                        <i className="fa fa-dashboard"></i>
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="/PMS/goals-comp" exact activeClassName="active_side_menu" >
                        <i className="fa fa-adjust"></i>
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="/PMS/performance" exact activeClassName="active_side_menu" >
                        <i className="fa fa-amazon"></i>
                    </NavLink>
                </li>
                <li> 
                    <NavLink to="/PMS/ticket" exact activeClassName="active_side_menu" >
                        <i className="fa fa-adjust"></i>
                    </NavLink>
                </li>
                
            </ul>
        </div>
        
    )
}
const mapDispatchToProps = {
    sideMenuToggle : toggleSideMenu
  }

export default connect(null,mapDispatchToProps)(halfSideBar)


