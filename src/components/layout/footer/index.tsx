import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-12 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h5 className="text-white font-bold text-lg">AJ Books</h5>
            <p className="text-sm">Discover the world through pages</p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d={`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`}
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {["Discover", "Support", "Legal"].map((section) => (
            <div key={section} className="space-y-4">
              <h6 className="text-white font-medium">{section}</h6>
              <ul className="space-y-2 text-sm">
                {[...Array(4)].map((_, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-blue-400 transition-colors"
                    >
                      {section} Link {i + 1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
