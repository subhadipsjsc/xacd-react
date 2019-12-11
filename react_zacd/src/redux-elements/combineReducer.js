import {combineReducers} from 'redux'

import sideMenuReducer from './sidemenu/sideMenu_Reducer'
import authReducer from './authentication/auth_reducer'
import basicReducer from './basic_reducer_&_action/basic_Reducer'


const rootreducer = combineReducers({
    basic:basicReducer,
    sideMenu : sideMenuReducer,
    session : authReducer    
}) 

export default rootreducer;