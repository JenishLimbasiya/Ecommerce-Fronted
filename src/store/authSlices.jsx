import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./services/authServices";

export const loginUser = createAsyncThunk("/login", async (data) => {
  const res = await authServices.login(data);
  return res;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginResponse: [],
    loginErrorMessage: "",
  },
  extraReducers: (builder) => {
    // login
    builder
      .addCase(loginUser.pending, (state) => {})
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginResponse = action?.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginErrorMessage = action?.error;
      });
  },
});

export default authSlice.reducer;
