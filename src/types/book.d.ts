type Book = {
  id: string;
  title: string;
  author: string;
  img_url: string;
  price: number;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

// redux slice
type BookState = {
  books: Book[];
  title: string;
  author: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

type BookListResponse = {
  data: Book[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
};

type BookItmeResponse = {
  book: Book;
};
