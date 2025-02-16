import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/book-slice";
import authReducer from "./slices/auth-slice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    auth: authReducer,
  },
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
}
