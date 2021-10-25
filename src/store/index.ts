import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { couterSlice } from "./counter";

const store = configureStore({
  reducer: {
    counter: couterSlice.reducer,
    auth: authSlice.reducer
  }
});

export default store;
