import {FETCH_BRANDNAME_FAILURE,FETCH_BRANDNAME_REQUEST,FETCH_BRANDNAME_SUCCESS,
    FETCH_APPARELNAME_REQUEST,FETCH_APPARELNAME_SUCCESS,FETCH_APPARELNAME_FAILURE,
    FETCH_GENDERNAME_FAILURE,FETCH_GENDERNAME_REQUEST,FETCH_GENDERNAME_SUCCESS
} from "../constants/categoryConstant";


export const brandNameReducer = (state = { brands: [], loading: false, error: '' }, action) => {
    switch (action.type) {
      case FETCH_BRANDNAME_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_BRANDNAME_SUCCESS:
        return {
          ...state,
          loading: false,
          brands: action.payload,
          error: '',
        };
      case FETCH_BRANDNAME_FAILURE:
        return {
          ...state,
          loading: false,
          brands: [],
          error: action.payload,
        };
      default:
        return state;
    }
};

export const apparelNameReducer = (state = { apparels: [], loading: false, error: '' }, action) => {
    switch (action.type) {
      case FETCH_APPARELNAME_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_APPARELNAME_SUCCESS:
        return {
          ...state,
          loading: false,
          apparels: action.payload,
          error: '',
        };
      case FETCH_APPARELNAME_FAILURE:
        return {
          ...state,
          loading: false,
          apparels: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };


  export const genderNameReducer = (state = { genders: [], loading: false, error: '' }, action) => {
    switch (action.type) {
      case FETCH_GENDERNAME_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_GENDERNAME_SUCCESS:
        return {
          ...state,
          loading: false,
          genders: action.payload,
          error: '',
        };
      case FETCH_GENDERNAME_FAILURE:
        return {
          ...state,
          loading: false,
          genders: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };