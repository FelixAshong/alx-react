import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes';

export const login = (email, password) => {
    return {
        type : LOGIN,
        user : { email, password }
    };
}
export const boundLogin = (email, password) => dispatch(login(email, password));

export const logout = () => ({ type: LOGOUT });
export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => ({ type: DISPLAY_NOTIFICATION_DRAWER });
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());


export const hideNotificationDrawer = () => ({ type: HIDE_NOTIFICATION_DRAWER });
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());


export const loginSuccess = () => ({ type: LOGIN_SUCCESS});
export const loginFailure = () => ({ type: LOGIN_FAILURE});

export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));
        const res = fetch('http://localhost:8564/login-success.json')
        .then((data) => {console.log('here');dispatch(loginSuccess());})
        .catch((err) => dispatch(loginFailure()));
        return res;
      };
}
