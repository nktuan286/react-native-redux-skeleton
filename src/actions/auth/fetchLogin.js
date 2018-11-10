//import library
import { LOGIN_REQUEST } from '../../common/actionTypes';
import { doLogin } from '../../services/authServices';

export const requestLogin = (username, password) => ({
    type: LOGIN_REQUEST,
    payload: { 
        isLoading: true 
    }
});

export const requestLoginSuccess = (dataLogin) => ({
    type: LOGIN_SUCCESS,
    payload: { dataLogin }
});

export const requestLoginFailure = () => ({
    type: LOGIN_FAILURE,
    payload: { loginError: true }
});

export const fetchLogin = (dataLogin) => (
    (dispatch) => {
        dispatch(requestLogin());
        return doLogin(dataLogin)
            .then((result) => {
                if(result !== null) {
                    dispatch(requestLoginSuccess(result))
                }
            }).catch(() => {
                dispatch(requestLoginFailure())
            });
    }
);