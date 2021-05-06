import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './TodoSlice';


export default configureStore({
  reducer: {
    todo: todoSlice,
  }
})