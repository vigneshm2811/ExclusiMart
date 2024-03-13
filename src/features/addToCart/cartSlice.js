import { createSlice} from "@reduxjs/toolkit";


const initialState =[]

export const addToCartSlice = createSlice({
    name:"addToCart",
    initialState,
    reducers:{
       addedToCart:(state,action)=>{
        state.push(action.payload);
       },
       removeFromCart:(state,action)=>{
        return state.filter(item => item.id !== action.payload);
       }
    }
})

export const {addedToCart,removeFromCart} =addToCartSlice.actions

export default addToCartSlice.reducer