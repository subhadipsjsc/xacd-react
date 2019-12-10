import {combineReducers} from 'redux'

import sideMenuReducer from './sidemenu/sideMenu_Reducer'
import authReducer from './authentication/auth_reducer'


const rootreducer = combineReducers({
    sideMenu : sideMenuReducer,
    session : authReducer    
}) 

export default rootreducer;