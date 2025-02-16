"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  tokens: Tokens | null;
  user: User | null;
}

const initialState: AuthState = {
  tokens: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Tokens | null>) => {
      state.tokens = action.payload;

      if (action.payload) {
        localStorage.setItem("tokens", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("tokens");
      }
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;

      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setTokens, setUser } = authSlice.actions;
export default authSlice.reducer;
