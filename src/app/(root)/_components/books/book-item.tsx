"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineBookOpen } from "react-icons/hi2";

export default function BookItem({ book }: { book: Book }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { id, title, author, img_url, price, amount } = book;
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="group relative h-72 bg-gradient-to-br from-slate-50 to-slate-100">

        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-20 transition-opacity">
            <HiOutlineBookOpen className="w-32 h-32 text-slate-300" />
          </div>
        )}

        <img
          src={img_url}
          alt="Book Cover"
          className="absolute p-4 inset-0 w-full h-full object-contain"
          onLoad={() => setIsImageLoaded(true)} 
        />

        <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          {price.toLocaleString()}원
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 truncate">{title}</h3>
        <p className="text-slate-600 text-sm mb-4">{author}</p>
        <div className="flex justify-between items-center">
          <Link
            href={`/books/${id}`}
            className="bg-blue-600 hover:bg-blue-400 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer"
          >
            자세히
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-slate-600 text-sm">재고 : {amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
