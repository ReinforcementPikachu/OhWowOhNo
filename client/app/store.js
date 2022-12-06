import { configureStore } from '@reduxjs/toolkit'
import fridgeReducer from '../features/fridgeSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    fridge: fridgeReducer,
    user: userReducer
  },
})