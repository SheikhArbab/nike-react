import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const addWishSlice = createSlice({
  name: 'addToWish',
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const productToAdd = action.payload;
      if (!state.products.some(product => product.id === productToAdd.id)) {
        state.products.unshift(productToAdd);
      }
    },
    clearAll: (state) => {
      state.products = [];
    },
  },
});

export const { addToWish, clearAll } = addWishSlice.actions;

export default addWishSlice.reducer;
