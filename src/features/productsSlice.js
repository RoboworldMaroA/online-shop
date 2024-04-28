import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items: [],
    status: null
}

// createReducer(initialState, builder => ) 

export const productFetch = createAsyncThunk(
    "products/productsFetch",
    async() => {
       const response =  await axios.get("http://localhost:5001/products")
       //It will display error if have no access to the data
       return response?.data
    }

) 
// const todoAdded = createAction('products/productsFetch')

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase( productFetch.pending, (state, action) => {
            // it uses immer
            state.status = "pending";
        })

        builder.addCase( productFetch.fulfilled, (state, action) => {
            // it uses immer
            state.status = "success"
            state.items = action.payload
        })

        builder.addCase( productFetch.rejected, (state, action) => {
            // it uses immer
            state.status = "rejected"
        })

    }
});

export default productsSlice.reducer;