"use client";

import Link from "next/link";

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

export default function PCNav() {
  return (
    <nav className="hidden md:flex space-x-8 mr-8">
      {elements.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className="flex items-center justify-center w-14 text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
}
