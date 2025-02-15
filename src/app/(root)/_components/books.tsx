"use client";

import { useState } from "react";

export default function Books() {
  const booksPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [books] = useState(
    Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      title: `Book Title ${i + 1}`,
      author: `Author ${i + 1}`,
      price: (Math.random() * 30 + 10).toFixed(2),
    }))
  );

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksOnCurrentPage = books.slice(startIndex, endIndex);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePreviousPage = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Featured Collection
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Explore our curated selection of bestselling and newly released
            titles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {booksOnCurrentPage.map((book) => (
            <div
              key={book.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-72 bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-20 transition-opacity">
                  <svg
                    className="w-32 h-32 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${book.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 truncate">
                  {book.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">by {book.author}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                    View Details
                  </button>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-slate-600 text-sm">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`p-2 w-32 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-slate-50"
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Previous</span>
            </span>
          </button>

          <span className="px-4 py-2 bg-white rounded-full shadow-md font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 w-32 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-slate-50"
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Next</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
