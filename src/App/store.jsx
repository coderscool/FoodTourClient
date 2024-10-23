import { configureStore } from '@reduxjs/toolkit';
import userReducer from './../component/Reducers/userSlice'
import dishSlice from '../component/Reducers/dishSlice';
import headerSlice from '../component/Reducers/headerSlice';
export const store = configureStore({
  reducer: {
    users: userReducer,
    dishs: dishSlice,
    headers: headerSlice
  },
});