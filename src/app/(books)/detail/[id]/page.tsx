"use client";

import { useFetch } from "@/hooks/use-fetch";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import BookInfo from "./_components/book-info";
import BookAction from "./_components/book-action";
import BookImage from "./_components/book-image";
import SkeletonBookDetail from "./_components/skeleton-book-detail";

export default function BookDetailPage() {
  const { id } = useParams();
  const BASE_URL =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";
  const url = `${BASE_URL}/api/books/${id}`;
  const { data, isLoading, fetchData } = useFetch<Book>();

  useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);

  return (
    <article className="mt-16 py-16 bg-slate-50 min-h-screen">
      {isLoading && <SkeletonBookDetail />}
      {data && (
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <BookImage {...data} />
            <div className="p-8 space-y-6">
              <BookInfo {...data} />
              <BookAction id={id as string} />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
