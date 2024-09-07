import { createStore, combineReducers, applyMiddleware } from 'redux';
import {productReducer, getAllProductReducer} from './reducers/productReducer';
import {apparelNameReducer,brandNameReducer,genderNameReducer} from './reducers/categoryReducer';
import loginReducer from './reducers/authReducer'

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; 


const rootReducer = combineReducers({
    products: productReducer,
    brands: brandNameReducer,
    apparels: apparelNameReducer,
    genders: genderNameReducer,
    user: loginReducer,
    productList: getAllProductReducer,

});

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;