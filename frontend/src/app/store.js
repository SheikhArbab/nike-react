import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../services/productsApi';
import sidebarReducer from '../features/sidebar/sidebarSlice';
import whishListSlice from '../features/wishList/whishListSlice';
import addWishReducer from '../features/addToWish/addWishSlice';
import cartReducer  from '../features/addToCart/addCartSlice';




const rootReducer = combineReducers({
  addToCart:cartReducer,
  addToWish:addWishReducer ,
  sidebar: sidebarReducer,
  wishList: whishListSlice, 
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
