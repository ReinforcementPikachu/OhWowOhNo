import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fridgeArray: [],
}

export const fridgeSlice = createSlice({
    name: 'fridge',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.fridgeArray.push(action.payload);
            console.log(state.fridgeArray)
        },
        deleteItem: (state, action) => {
            state.fridgeArray.filter(item => item !== action.payload)
        },
    },
});

export const { addItem, deleteItem } = fridgeSlice.actions;

export default fridgeSlice.reducer;