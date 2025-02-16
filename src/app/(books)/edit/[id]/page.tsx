"use client";

import NotAuthenticated from "@/components/ui/not-authenticated";
import { useFetch } from "@/hooks/use-fetch";
import { useRefresh } from "@/hooks/use-refresh";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function BookEditPage() {
  const { tokens } = useSelector((state: RootState) => state.auth);
  const { id } = useParams();
  const BASE_URL =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";
  const url = `${BASE_URL}/api/books/${id}`;
  const { data, fetchData } = useFetch<Book>();
  const { fetchData: fetchDataWithAuth } = useRefresh<Book>();
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [img_url, setImgUrl] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);

  useEffect(() => {
    // console.log(data);
    if (data) {
      setTitle(data.title);
      setImgUrl(data.img_url);
      setAuthor(data.author);
      setAmount(data.amount);
      setPrice(data.price);
    }
  }, [data, setTitle, setImgUrl, setAuthor, setAmount, setPrice]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = (await fetchDataWithAuth(
      url,
      "PUT",
      JSON.stringify({ title, img_url, author, amount, price })
    )) as Book;

    if (result) {
      router.push(`${BASE_URL}/detail/${id}`);
    }
  };

  if (!tokens) return <NotAuthenticated />;

  return (
    <article className="mt-16 py-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Edit Book
          </h2>

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  제목
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  이미지
                </label>
                <input
                  type="text"
                  value={img_url}
                  onChange={(e) => setImgUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  작가
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    재고
                  </label>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    가격
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors cursor-pointer"
              >
                Save Changes
              </button>
              <Link
                href={`${BASE_URL}/detail/${id}`}
                className="text-center flex-1 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full transition-colors cursor-pointer"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
}
