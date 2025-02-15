import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: BookState = {
  books: [],
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  status: "idle",
  error: null,
};

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";
export const fetchBooksData = createAsyncThunk(
  "book/fetchBooksData",
  async (page: number) => {
    try {
      const url = `${BASE_URL}/api/books?page=${page}`;
      const response = await fetch(url);
      const data: BookListResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching books data:", error);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooksData.fulfilled, (state, action) => {
        state.status = "succeeded";
        const result = action.payload as BookListResponse;
        state.books = result.data;
        state.currentPage = result.pagination.currentPage;
        state.totalPages = result.pagination.totalPages;
        state.totalItems = result.pagination.totalItems;
      })
      .addCase(fetchBooksData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default bookSlice.reducer;
