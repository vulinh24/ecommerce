import { createAction } from "@reduxjs/toolkit";

export const CHANGE_CUR_USER = 'changeUser' 

export const changeCurrentUser = createAction(CHANGE_CUR_USER);