import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  deleteContactsApi,
  getContactsApi,
  getCurrentUserApi,
  loginUserApi,
  postContactsApi,
  registerUserApi,
} from '../../utils/Api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, thunkApi) => {
    try {
      const data = await registerUserApi(userData);
      //   console.log('data: ', data);
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, thunkApi) => {
    try {
      const data = await loginUserApi(userData);
      //   console.log('data: ', data);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkApi) => {
    try {
      const data = await axios.post('/users/logout');
      //   console.log('data: ', data);
      token.unset();
      return data.status;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, thunkApi) => {
    try {
      //   console.log('insideTry');
      const contactsFromApi = await getContactsApi();
      return contactsFromApi;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  'addContacts',
  async (dataFromForm, thunkApi) => {
    try {
      const contact = await postContactsApi(dataFromForm);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const removeContacts = createAsyncThunk(
  'removeContacts',
  async (id, thunkApi) => {
    try {
      await deleteContactsApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (_, thunkApi) => {
    try {
      const { token } = thunkApi.getState().auth;
      const resFromCurrentUser = await getCurrentUserApi(token);
      // console.log('resFromCurrentUser: ', resFromCurrentUser.data);
      return resFromCurrentUser.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
