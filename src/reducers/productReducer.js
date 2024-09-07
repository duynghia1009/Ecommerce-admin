import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, GET_ALL_PRODUCT_REQUEST, GET_ALL_PRODUCT_SUCCESS, GET_ALL_PRODUCT_FAIL } from "../constants/productConstant";

export const productReducer = (state = { products: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case ADD_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload],
            };
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getAllProductReducer = (state = { productList: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productList: [...state.productList, action.payload],
            };
        case GET_ALL_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}