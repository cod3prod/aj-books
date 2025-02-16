"use client";

import { useFetch } from "@/hooks/use-fetch";
import { useRefresh } from "@/hooks/use-refresh";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BookDetailPage() {
  const { id } = useParams();
  const BASE_URL =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";
  const url = `${BASE_URL}/api/books/${id}`;
  const { data, fetchData } = useFetch<Book>();
  const { fetchData: fetchDataWithAuth } = useRefresh<null>();
  const router = useRouter();

  useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);

  const handleDelete = async () => {
    await fetchDataWithAuth(url, "DELETE");
    router.push("/");
  };

  return (
    <article className="py-16 bg-slate-50 min-h-screen">
      {data && (
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* 이미지 섹션 */}
            <div className="relative h-96 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
              <img
                src={data.img_url}
                alt="Book Cover"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                {data.price}
              </div>
            </div>

            {/* 상세 정보 섹션 */}
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
                  <p className="text-xl text-slate-600 mb-4">{data.author}</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  재고: {data.amount}
                </span>
              </div>

              <div className="flex gap-4 pt-6 border-t border-slate-200">
                <Link
                  href={`/edit/${data.id}`}
                  className="text-center flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors cursor-pointer"
                >
                  수정하기
                </Link>
                <button
                  onClick={handleDelete}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full transition-colors cursor-pointer"
                >
                  삭제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
