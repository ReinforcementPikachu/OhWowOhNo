import { createSlice } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipeArray: [],
    },
    reducers: {
        addRecipe: (state, action) => {
            state.recipeArray.push(action.payload);
        }
    }
})

export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;