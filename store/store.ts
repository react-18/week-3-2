import { configureStore } from '@reduxjs/toolkit';
import SearchListReducer from './searchList';

export const store = configureStore({
  reducer: {
    searchList: SearchListReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
