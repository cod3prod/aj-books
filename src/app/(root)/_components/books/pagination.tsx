"use client;";

import { fetchBooksData } from "@/store/slices/book-slice";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

export default function Pagination() {
  const { currentPage, totalPages } = useSelector(
    (state: RootState) => state.book
  );
  const dispatch = useDispatch<AppDispatch>();

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(fetchBooksData(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchBooksData(currentPage + 1));
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
        <p>&lt; 이전</p>
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
        <p>이후 &gt;</p>
      </button>
    </div>
  );
}
