import { configureStore } from '@reduxjs/toolkit';
import authDataReducer from './auth/authReducers';
import contactsDataReducer from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    auth: authDataReducer,
    contacts: contactsDataReducer,
  },
});
