import Link from "next/link";

export default function NotAuthenticated() {
  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center bg-gradient-to-r from-slate-100 to-blue-100 text-white overflow-hidden">
      <section className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <h2 className="text-4xl font-bold mb-8 text-center text-slate-800">
          로그인 필요합니다
        </h2>

        <div className="text-slate-600 space-y-6">
          <Link
            href={"/admin"}
            className="text-center inline-block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            로그인
          </Link>
        </div>
      </section>
    </div>
  );
}
