import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: BookState = {
  books: [],
  title: "",
  author: "",
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  status: "idle",
  error: null,
};

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";

interface FetchBooksParams {
  page: number;
  title?: string;
  author?: string;
}

export const fetchBooksData = createAsyncThunk(
  "book/fetchBooksData",
  async ({ page, title, author }: FetchBooksParams) => {
    try {
      const url = new URL(`${BASE_URL}/api/books`);
      url.searchParams.append("page", String(page));
      if (title) url.searchParams.append("title", title);
      if (author) url.searchParams.append("author", author);

      const response = await fetch(url.toString());
      const data: BookListResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching books data:", error);
      throw error;
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setAuthor(state, action) {
      state.author = action.payload;
    },
  },
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

export const { setTitle, setAuthor } = bookSlice.actions;
export default bookSlice.reducer;
