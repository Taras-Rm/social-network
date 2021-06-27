import {stopSubmit} from 'redux-form';
import {authAPI} from '../api/api';

const SET_USER_DATA = 'header/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isLogined: false,
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isLogined: action.payload.isAuth,
            };
        }
        default:
            return state;
    }
};

export const setUserData = (id, email, login, isAuth) => {
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth}};
};

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.auth();
    if (response.data.resultCode === 0) {
        dispatch(
            setUserData(
                response.data.data.id,
                response.data.data.email,
                response.data.data.login,
                true,
            )
        );
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let errorText = response.data.resultCode ? response.data.messages[0] : 'Some error';
            let action = stopSubmit('login', {_error: errorText});
            dispatch(action);
        };
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        };
};

export default headerReducer;
