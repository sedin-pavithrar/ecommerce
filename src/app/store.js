import {configureStore} from '@reduxjs/toolkit';
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";


// global data storage configuration for app 

export const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
    },
})