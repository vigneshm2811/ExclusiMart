import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "../features/wishList/WishListSlice";
import addToCartSlice from "../features/addToCart/cartSlice"

 const store = configureStore({
  reducer: {
    wishList: wishListSlice,
    addToCart:addToCartSlice
  },
});


export default store;