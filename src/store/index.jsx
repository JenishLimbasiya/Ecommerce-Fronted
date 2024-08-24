import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlices";
import toastReducer from "./toastSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
  },
});

export default store;
