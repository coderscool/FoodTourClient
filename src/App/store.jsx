import { configureStore } from '@reduxjs/toolkit';
import userReducer from './../component/Reducers/userSlice'
import dishSlice from '../component/Reducers/dishSlice';
export const store = configureStore({
  reducer: {
    users: userReducer,
    dishs: dishSlice
  },
});