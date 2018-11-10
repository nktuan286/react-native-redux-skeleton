import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
} from '../common/actionTypes';

const initialState = {
    dataLogin: {},
    isLoading: false,
    loginError: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                loginError: false
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                loginError: false,
                dataLogin: action.payload.dataLogin
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                loginError: true
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
