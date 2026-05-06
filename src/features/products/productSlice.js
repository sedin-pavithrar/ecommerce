import {createSlice} from "@reduxjs/toolkit";

import {fetchProducts} from "./productThunks";




const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        loading:false,
        error:null,
        searchText:"",
        selectedCategory:"all",
        viewMode:"grid",
    },
        reducers:{
             setSearchText:(state,action)=>{
                state.searchText = action.payload;
            },
            setSelectedCategory:(state,action)=>{
                state.selectedCategory = action.payload;
            },
            toggleViewMode:(state)=>{
                state.viewMode = state.viewMode ==="grid"?"list":"grid";
            }
        },
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
export const{setSearchText,setSelectedCategory,toggleViewMode}=productSlice.actions;
export default productSlice.reducer;