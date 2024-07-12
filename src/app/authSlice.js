import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import LoginApi from "api/loginApi";

export const loginAccount = createAsyncThunk(
  "auth/loginAccount",
  async ({ username, password }) => {
    const response = await LoginApi.loginEndpoint(username, password);
    console.log(response);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAccount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginAccount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
