import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    value: false,
}



export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: initialState,
    reducers: {
        sidebar: (state, action) => {

            state.value = action.payload;
        },
    },
})


export const { sidebar } = sidebarSlice.actions

export default sidebarSlice.reducer