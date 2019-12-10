import {TOGGLE_SIDE_MENU} from '../action_names'



const initialState = true

const sideMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_MENU: 
            return !state
    
        default: 
            return state
    }
} 


export default  sideMenuReducer