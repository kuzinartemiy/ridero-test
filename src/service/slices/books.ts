/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TBook } from '../../utils/types';

interface IInitialState {
  books: Array<TBook>;
}

const initialState: IInitialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state: IInitialState, action: PayloadAction<Array<TBook>>) {
      state.books = action.payload;
    },
    deleteBook(state: IInitialState, action: PayloadAction<string>) {
      const localBooks = JSON.parse(localStorage.getItem('books') || '[]') || [];
      const filteredBooks = localBooks.filter((book: TBook) => book.id !== action.payload);
      localStorage.setItem('books', JSON.stringify(filteredBooks));

      state.books = state.books.filter((book: TBook) => book.id !== action.payload);
    },
    addBook(state: IInitialState, action: PayloadAction<TBook>) {
      const localBooks = JSON.parse(localStorage.getItem('books') || '[]') || [];
      localStorage.setItem('books', JSON.stringify([action.payload, ...localBooks]));
      state.books = [action.payload, ...state.books];
    },
  },
});

export const { setBooks, deleteBook, addBook } = booksSlice.actions;
