import React, { Component } from 'react'
import {connect} from 'react-redux'

import FullNavBar from './SideNavbar/fullSideBar';
import HalfNavBar from './SideNavbar/halfSideBar';




class Home extends Component {
    

    
    render() {

        let Sidenavbar = <FullNavBar/>;
        let article_class = 'article_small';
        if(this.props.sideMenuStatus){
            Sidenavbar = <FullNavBar/>;
            article_class = 'article_small';
        }
        else{
            Sidenavbar = <HalfNavBar/>
            article_class = 'article_big';
        }

        return (
            <div>
               {Sidenavbar}
               <div className ={article_class}> 
                    <div className="div100 bg4 pd50">100</div>
                    <div className="div75 bg1 pd50 float_left">75</div>
                    <div className="div25 bg2 pd50 float_right">25</div>
                    <div className="div50 bg3 pd50 float_left">50</div>
                    <div className="div50 bg4 pd50 float_left">50</div>
                    <div className="div25 bg5 pd50 float_left">25</div>
                    <div className="div25 bg6 pd50 float_left">25</div>
                    <div className="div25 bg1 pd50 float_left">25</div>
                    <div className="div25 bg2 pd50 float_left">25</div>                        
               </div>              
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      sideMenuStatus: state.sideMenu
    }
  }

export default connect(mapStateToProps)(Home)