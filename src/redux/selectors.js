import {createSelector} from '@reduxjs/toolkit'

export const getCurrentUser = (state) => state.currentUser;
export const getCurrentUser2 = createSelector(
    getCurrentUser,
    //user = return of getcurrentuser
    (user) => {
        if (user.username === '' ) return null;
        else return user;
    }
)