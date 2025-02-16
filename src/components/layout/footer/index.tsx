import Link from "next/link";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-12 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h5 className="text-white font-bold text-lg">AJ Books</h5>
            <p className="text-sm">Contact</p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/cod3prod/aj-books"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:cod3prod@gmail.com"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} AJ Books. All rights reserved.
            Crafted with <span className="text-rose-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
