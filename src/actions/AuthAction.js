import { Base64 } from "js-base64";
import {LOGIN_FAILURE,LOGIN_REQUEST, LOGIN_SUCCESS, AUTH_DETAILS_COOKIE,
    LOGOUT
} from "../constants/authConstant";

import axios from 'axios';
import Cookies from 'js-cookie';

export const login = (username, password, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const hash = Base64.encode(`${username}:${password}`);
        axios.defaults.headers.common['Authorization'] = `Basic ${hash}`;

        const response = await axios.post("http://localhost:5000/api/auth/authenticate");

        if (response) {
            if (response.data.jwt) {
                
                dispatch({type: LOGIN_SUCCESS, payload: response.data});
                Cookies.set(AUTH_DETAILS_COOKIE, response.data, {expires: 2});
                navigate("/");
            } 
        }
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.message,
        });
    }
}

export const logout = () => {
    Cookies.remove(AUTH_DETAILS_COOKIE);
    return {
        type: LOGOUT
    }
}