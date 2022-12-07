import { createSlice } from '@reduxjs/toolkit'

export const fridgeSlice = createSlice({
    name: 'fridge',
    initialState: {
        food: '',
        fridgeList: [],
        ingredientList: []
    },
    reducers: {
        addItem: (state, action) => {
            state.fridgeList.push(...action.payload);
        },
        deleteItem: (state, action) => {
            state.fridgeList = state.fridgeList.filter(item => item !== action.payload)
        },

        createFood: (state, action) => {
            state.food = action.payload
        },
        addIngredient: (state, action) => {
            if (!state.ingredientList.includes(action.payload)) {
                state.ingredientList.push(action.payload)
            }
        },
        clearIngredients: (state, action) => {
            state.ingredientList = [];
        }
    },
});

export const { addItem, deleteItem, createFood, addIngredient, clearIngredients } = fridgeSlice.actions;

export const selectFood = (state) => state.fridge.food;
export const selectContents = (state) => state.fridge.fridgeList;
export const selectIngredients = (state) => state.fridge.ingredientList;

export default fridgeSlice.reducer;