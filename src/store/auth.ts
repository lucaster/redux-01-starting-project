import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false
  },
  reducers: {
    login: (state, action) => {
      state.authenticated = true;
    },
    logout: (state, action) => {
      state.authenticated = false;
    }
  }
});

export const authActions = authSlice.actions;
