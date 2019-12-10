import {
    USER_LOGIN,
    USER_LOGOUT
} from '../action_names'



const user_session = false

const authReducer = (state = user_session, action) => {
    switch (action.type) {
        case USER_LOGIN: 
            return state = true;

        case USER_LOGOUT: 
            return state = false;

        default: 
            return state
    }
} 


export default  authReducer