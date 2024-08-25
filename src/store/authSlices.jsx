import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./services/authServices";

export const loginUser = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await authServices.login(data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginResponse: [],
    loginErrorMessage: "",
  },
  extraReducers: (builder) => {
    // login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginErrorMessage = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginResponse = action?.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginErrorMessage = action.payload;
      });
  },
});

export default authSlice.reducer;
