import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const wishSlice = createSlice({
  name: 'wish',
  initialState: initialState,
  reducers: {
    setWish: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWish } = wishSlice.actions;

export default wishSlice.reducer;
