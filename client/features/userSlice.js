import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: 0,
        username: '',
        authenticated: false,
        error: null,
        signup: null
    },
    reducers: {
        logIn: (state, action) => {
            console.log(action)
            state.userId = action.payload.user_id,
            state.username = action.payload.username,
            state.authenticated = true
            state.error = false
        },
        logOut: (state, action) => {
            state.userId = 0,
            state.username = '',
            state.authenticated = false
        },
        noUser: (state) => {
            state.error = true,
            state.authenticated = false
        }, 
        newUser: (state) => {
            state.signup = true;
        },
        userInDatabase: (state,action) => {
            state.error = true
        }
    },
});

export const {logIn, logOut, noUser, newUser, userInDatabase} = userSlice.actions;

export const selectUserId = (state) => state.user.userId;
export const selectUsername = (state) => state.user.username;
export const selectAuthenticated = (state) => state.user.authenticated;
export const selectError = (state) => state.user.error;
export const selectSignup = (state) => state.user.signup

export default userSlice.reducer;