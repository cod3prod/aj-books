"use client";

import Link from "next/link";
import AuthHandler from "./auth-handler";

const elements = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "New",
    path: "/add",
  },
];
export default function Dropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100">
      <div className="p-2 space-y-1">
        {elements.map((el, idx) => (
          <Link
            key={idx}
            href={el.path}
            className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-lg font-medium"
            onClick={onClose}
          >
            {el.name}
          </Link>
        ))}
        <div className="flex items-center justify-center pb-2">
          <AuthHandler />
        </div>
      </div>
    </div>
  );
}
