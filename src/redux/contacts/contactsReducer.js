import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filterAction } from './contactsActions';
import {
  addContacts,
  getContacts,
  loginUser,
  logOutUser,
  registerUser,
  removeContacts,
} from './contactsOperations';

export const itemsReducer = createReducer([], {
  [getContacts.fulfilled]: (_, action) => {
    // console.log("payload :>> ", payload);
    return action.payload;
  },
  [addContacts.fulfilled]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContacts.fulfilled]: (state, action) => {
    return state.filter(el => el.id !== action.payload);
  },
});

export const filterReducer = createReducer('', {
  [filterAction]: (state, action) => {
    return (state = action.payload);
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

const contactsDataReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
export default contactsDataReducer;
