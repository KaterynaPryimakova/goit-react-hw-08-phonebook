import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  error: null,
  userData: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,
});

export const authReducer = authSlice.reducer;
