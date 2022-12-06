import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: 0,
    username: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.userId = action.payload.id;
            state.username = action.payload.username
        },
        logOut: (state, action) => {
            state.userId = 0;
            state.username = ''
        },
    },
});

export const {logIn, logOut} = userSlice.actions;

export default userSlice.reducer;