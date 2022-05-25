import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { getCurrentUser } from 'redux/contacts/contactsOperations';
import {
  addContacts,
  getContacts,
  loginUser,
  logOutUser,
  registerUser,
} from './authOperations';

export const userReducer = createReducer('', {
  [loginUser.fulfilled]: (state, action) => {
    return (state = action.payload.user.name);
  },
  [logOutUser.fulfilled]: (state, action) => {
    return (state = '');
  },
  [getCurrentUser.fulfilled]: (state, action) => {
    return (state = action.payload.name);
  },
});
export const emailReducer = createReducer('', {
  [loginUser.fulfilled]: (state, action) => {
    return (state = action.payload.user.email);
  },
  [logOutUser.fulfilled]: (state, action) => {
    return (state = '');
  },
  [getCurrentUser.fulfilled]: (state, action) => {
    return (state = action.payload.email);
  },
});
export const tokenReducer = createReducer(
  () => {
    let getLocalStorage = localStorage.getItem('localDB');
    let parceLocalStorage = JSON.parse(getLocalStorage);
    return parceLocalStorage ?? '';
  },
  {
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem('localDB', JSON.stringify(action.payload.token));
      return (state = action.payload.token);
    },
    [logOutUser.fulfilled]: (state, action) => {
      localStorage.setItem('localDB', JSON.stringify(''));
      return (state = '');
    },
  }
);
export const isLoggedInReducer = createReducer(false, {
  [loginUser.fulfilled]: (state, action) => {
    return true;
  },
  [logOutUser.fulfilled]: (state, action) => {
    return (state = false);
  },
  [getCurrentUser.fulfilled]: state => {
    return (state = true);
  },
});

export const isLoadingReducer = createReducer(false, {
  [loginUser.pending]: state => {
    return (state = true);
  },
  [loginUser.fulfilled]: state => {
    return (state = false);
  },
  [logOutUser.pending]: state => {
    return (state = true);
  },
  [logOutUser.fulfilled]: state => {
    return (state = false);
  },
  [registerUser.pending]: state => {
    return (state = true);
  },
  [registerUser.fulfilled]: state => {
    return (state = false);
  },
  [addContacts.pending]: state => {
    return (state = true);
  },
  [addContacts.fulfilled]: state => {
    return (state = false);
  },
  [getContacts.pending]: state => {
    return (state = true);
  },
  [getContacts.fulfilled]: state => {
    return (state = false);
  },
});
export const errorReducer = createReducer('', {
  [loginUser.rejected]: (state, action) => {
    return (state = action.payload);
  },
  [logOutUser.rejected]: (state, action) => {
    return (state = action.payload);
  },
  [registerUser.rejected]: (state, action) => {
    return (state = action.payload);
  },
  [addContacts.rejected]: (state, action) => {
    return (state = action.payload);
  },
  [getContacts]: (state, action) => {
    return (state = action.payload);
  },
});
const authDataReducer = combineReducers({
  name: userReducer,
  email: emailReducer,
  token: tokenReducer,
  isLoggedIn: isLoggedInReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default authDataReducer;
