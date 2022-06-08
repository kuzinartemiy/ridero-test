import { combineReducers } from '@reduxjs/toolkit';
import { booksSlice } from './books';

export const rootReducer = combineReducers({
  books: booksSlice.reducer,
});

export default rootReducer;
