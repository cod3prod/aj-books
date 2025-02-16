"use client";

import Link from "next/link";
import PCNav from "./pc-nav";
import MobileNav from "./mobile-nav";
import AuthHandler from "./auth-handler";

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 z-40 w-full">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            AJ Books
          </Link>
          <div className="hidden md:flex gap-2">
            <PCNav />
            <AuthHandler />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
