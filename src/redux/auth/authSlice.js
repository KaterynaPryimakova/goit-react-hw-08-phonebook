import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './operations';

const initialState = {
  token: null,
  error: null,
  userData: null,
  isLoading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addMatcher(isAnyOf(registerUser.pending, loginUser.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(registerUser.rejected, loginUser.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
