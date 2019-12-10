import {
    USER_LOGIN,
    USER_LOGOUT
} from '../action_names';

export const loginAction = () => {
    return {
        type: USER_LOGIN
    }
}

export const auth_action_login = (history, previous_link) => {
    console.log(previous_link);
    return dispatch => {
        const pathname = previous_link.pathname ? previous_link.pathname : 'index';
        const query_parametrs = previous_link.query_parametrs ? previous_link.query_parametrs : '';
        dispatch(loginAction())
        history.push(pathname + query_parametrs);
    }
}