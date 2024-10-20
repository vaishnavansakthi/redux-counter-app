import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice.js';

export const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
  },
});
