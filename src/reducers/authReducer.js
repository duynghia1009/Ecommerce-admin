import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../constants/authConstant";
import _ from "lodash";

const loginReducer = (state = { isAuthenticated: false, user: [], loading: false, error }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                isAuthenticated: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuthenticated: false
            };
        case LOGOUT: 
            _.omit(state, 'error');
            return {...state, isAuthenticated: false, user: null};
        default:
            return state;
    }
};

export default loginReducer;