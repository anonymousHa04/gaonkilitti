import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import dropdownReducer from '../slices/dropdownSlices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dropdown: dropdownReducer
  },
})