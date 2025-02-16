"use client";

import { fetchBooksData } from "@/store/slices/book-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./pagination";
import BookItem from "./book-item";
import { toast } from "react-toastify";

export default function Books() {
  const dispatch = useDispatch<AppDispatch>();
  const { books, error, currentPage } = useSelector(
    (state: RootState) => state.book
  );

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooksData({page: 1}));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBooksData({page: currentPage}));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error("책 리스트를 가져오지 못했습니다.");
    }
  }, [error]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            모든 책 보기
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            다양한 책을 둘러보고 원하는 책을 찾아보세요
          </p>
        </div>

        <Pagination />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
