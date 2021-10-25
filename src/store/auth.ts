import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  readonly authenticated: boolean
}

const initialAuthState: AuthState = {
  authenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
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
