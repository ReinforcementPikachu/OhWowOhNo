import { createSlice } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipeArray: [],
        savedRecipes: [],
    },
    reducers: {
        returnedRecipes: (state, action) => {
            console.log(action.payload)
            state.recipeArray.push(...action.payload);
        },
        addRecipe: (state, action) => {
            if (!state.savedRecipes.includes(action.payload)) {
                state.savedRecipes.push(action.payload)
            }
        }
    }
})

export const { returnedRecipes, addRecipe } = recipeSlice.actions;
export const selectRecipes = (state) => state.recipes.recipeArray;
export const selectSaved = (state) => state.recipes.savedRecipes;

export default recipeSlice.reducer;