import {createSlice} from "@reduxjs/toolkit";

import {fetchProducts} from "./productThunks";

const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        loading:false,
        error:null,
    },
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(fetchProducts.pending,(state)=>{
                state.loading = true;
                
            })
            .addCase(fetchProducts.fulfilled,(state,action)=>{
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected,(state)=> {
                state.loading = false;
                state.error = "Failed to fetch products";
            });
            
        },
});

export default productSlice.reducer;