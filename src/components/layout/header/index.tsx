import Link from "next/link";
// import { FaChevronDown } from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "New",
    path: "/add",
  },
  {
    name: "Admin",
    path: "/admin",
  },
];

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

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="w-14 text-center text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
{/* 
          <div className="hidden md:flex items-center space-x-4">
            <button className="md:hidden text-slate-600 hover:text-blue-600 transition-colors duration-500 cursor-pointer">
              <FaChevronDown className="w-6 h-6" />
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
}
