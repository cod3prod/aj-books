"use client;";

import { fetchBooksData } from "@/store/slices/book-slice";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

export default function Pagination() {
  const { currentPage, totalPages, title, author } = useSelector(
    (state: RootState) => state.book
  );
  const dispatch = useDispatch<AppDispatch>();

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(fetchBooksData({ page: currentPage - 1, title, author }));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchBooksData({ page: currentPage + 1, title, author }));
    }
  };

  return (
    <div className="mt-12 mb-8 flex justify-center items-center space-x-4">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={twMerge(
          "p-2 w-32 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer",
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-slate-50"
        )}
      >
        <p>&lt;</p>
      </button>

      <span className="px-4 py-2 bg-white rounded-full shadow-md font-medium">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={twMerge(
          "p-2 w-32 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer",
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-slate-50"
        )}
      >
        <p>&gt;</p>
      </button>
    </div>
  );
}
