import { createSlice } from '@reduxjs/toolkit'

export const fridgeSlice = createSlice({
    name: 'fridge',
    initialState: {
        food: '',
        fridgeArray: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.fridgeArray.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.fridgeArray.filter(item => item !== action.payload)
        },

        createFood: (state, action) => {
            state.food = action.payload
        }
    },
});

export const { addItem, deleteItem, createFood } = fridgeSlice.actions;

export const selectFood = (state) => state.fridge.food;
export const selectContents = (state) => state.fridge.fridgeArray;

export default fridgeSlice.reducer;