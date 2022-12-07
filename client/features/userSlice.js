import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: 0,
        username: '',
        authenticated: false,
        error: null
    },
    reducers: {
        logIn: (state, action) => {
            console.log(action)
            state.userId = action.payload.id,
            state.username = action.payload.username,
            state.authenticated = true
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
            state.authenticated = true
        },
        userInDatabase: (state,action) => {
            state.error = true,
            state.username = action.payload.username
        }
    },
});

export const {logIn, logOut, noUser, newUser, userInDatabase} = userSlice.actions;

export const selectUserId = (state) => state.user.userId;
export const selectUsername = (state) => state.user.username;
export const selectAuthenticated = (state) => state.user.authenticated;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;