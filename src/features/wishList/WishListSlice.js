import { createSlice} from "@reduxjs/toolkit";


const initialState =[]

export const wishListSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
       addItemsFav:(state,action)=>{
        state.push(action.payload);
       },
       removeFavItems:(state,action)=>{
        return state.filter(item => item.id !== action.payload);
       }
    }
})

export const {addItemsFav,removeFavItems} =wishListSlice.actions

export default wishListSlice.reducer