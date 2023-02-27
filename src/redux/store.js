import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice';

const mystore = configureStore({
    reducer: {
        //name : sub reducer
        currentUser : userSlice.reducer
    }
})

export default mystore;  