import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'currentUser',
    initialState: localStorage.getItem('user') === null ? {} : JSON.parse(localStorage.getItem('user')),
    reducers: {
        updateCurrentUser: (state, action) => {
            state.username = action.payload.username;
            state.avatar = action.payload.avatar;
        }
    }
})

export default userSlice;