import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: authReducer,
  devTools: true,
});
