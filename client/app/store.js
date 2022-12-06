import { configureStore } from '@reduxjs/toolkit';
import fridgeReducer from '../features/fridgeSlice';
import userReducer from '../features/userSlice';
import recipeReducer from '../features/recipeSlice';

export const store = configureStore({
  reducer: {
    fridge: fridgeReducer,
    user: userReducer,
    recipes: recipeReducer,
  },
})