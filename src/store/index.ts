import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/book-slice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
}
