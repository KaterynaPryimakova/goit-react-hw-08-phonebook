import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helpers/axiosInstance';

const setToken = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/users/signup', userData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/users/login/', userData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) return thunkAPI.rejectWithValue("You don't have a token!");
    try {
      setToken(token);
      const { data } = await axiosInstance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await axiosInstance.post('/users/logout');
      removeToken();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
