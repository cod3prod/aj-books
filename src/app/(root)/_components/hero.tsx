import { fetchBooksData, setAuthor, setTitle } from "@/store/slices/book-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Hero() {
  const [searchType, setSearchType] = useState("title");
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (searchType === "title") {
      dispatch(setTitle(searchQuery));
      dispatch(setAuthor(null));
      dispatch(fetchBooksData({ page: 1, title: searchQuery }));
    } else if (searchType === "author") {
      dispatch(setTitle(null));
      dispatch(setAuthor(searchQuery));
      dispatch(fetchBooksData({ page: 1, author: searchQuery }));
    }
  };

  return (
    <section className="relative mt-16 py-24 bg-gradient-to-r from-slate-900 to-blue-800 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/soft-circle-scales.png')",
        }}
      ></div>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in-down">
          찾고 싶은 책을{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">
            검색
          </span>
          하세요
        </h2>
        <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
          새로운 이야기와 지식을 만나보세요
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
          <div className="relative w-full md:w-96">
            <div className="flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full">
              <select
                className="pl-4 pr-2 py-4 bg-transparent text-white focus:outline-none"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="title" className="text-black">
                  책
                </option>
                <option value="author" className="text-black">
                  작가
                </option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  searchType === "title"
                    ? "책 제목을 입력하세요"
                    : "작가 이름을 입력하세요"
                }
                className="w-full pl-4 pr-32 py-4 bg-transparent focus:outline-none placeholder:text-slate-200"
              />
            </div>
            <button
              onClick={handleSearch}
              className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
