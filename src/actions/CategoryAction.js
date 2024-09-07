import {FETCH_BRANDNAME_FAILURE,FETCH_BRANDNAME_REQUEST,FETCH_BRANDNAME_SUCCESS,
    FETCH_APPARELNAME_REQUEST,FETCH_APPARELNAME_SUCCESS,FETCH_APPARELNAME_FAILURE,
    FETCH_GENDERNAME_FAILURE,FETCH_GENDERNAME_REQUEST,FETCH_GENDERNAME_SUCCESS
} from "../constants/categoryConstant";

import axios from 'axios';

export const fetchBrandList = () => async (dispatch) => {
    dispatch({ type: FETCH_BRANDNAME_REQUEST });
    try {

        const response = await axios.get("http://localhost:5000/api/brand/getAllBrandCategory");

        dispatch({
            type: FETCH_BRANDNAME_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_BRANDNAME_FAILURE,
            payload: error.message,
        });
    }
};

export const fetchApparelList = () => async (dispatch) => {
    dispatch({ type: FETCH_APPARELNAME_REQUEST });
    try {

        const response = await axios.get("http://localhost:5000/api/apparel/getAllApparelCategory");

        dispatch({
            type: FETCH_APPARELNAME_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_APPARELNAME_FAILURE,
            payload: error.message,
        });
    }
};

export const fetchGenderList = () => async (dispatch) => {
    dispatch({ type: FETCH_GENDERNAME_REQUEST });
    try {

        const response = await axios.get("http://localhost:5000/api/gender/getAllGenders");
        dispatch({
            type: FETCH_GENDERNAME_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_GENDERNAME_FAILURE,
            payload: error.message,
        });
    }
};