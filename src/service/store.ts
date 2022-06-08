import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slices';

const state = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof state.getState>;
export type AppDispatch = typeof state.dispatch;

export default state;
