import {configureStore,createSlice} from '@reduxjs/toolkit';
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";


// global data storage configuration for app 

const dummySlice = createSlice({
    name:"dummy",
    initialState:{
        value:"Redux works",
    },
    reducers:{},
})
export const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
    },
})