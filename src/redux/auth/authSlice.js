import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';

const initialState = {
  isLoggedIn: false,
  userData: null,
  token: null,
  error: null,
  isLoading: false,
  isRefreshing: false,
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
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.userData = action.payload;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(registerUser.pending, loginUser.pending, logoutUser.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(registerUser.rejected, loginUser.rejected, logoutUser.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
