"use client";
import { LuLockKeyhole } from "react-icons/lu";
// import { LuLockKeyholeOpen } from "react-icons/lu";

export default function Page() {
  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center">
      <section className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <h2 className="text-4xl font-bold mb-8 text-center text-slate-800">
          어드민 로그인
        </h2>

        <form className="text-slate-600 space-y-6">
          <div className="relative">
            <input
              type="password"
              placeholder="패스워드를 입력하세요"
              className="w-full pl-6 pr-4 py-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-slate-200 focus:outline-none focus:border-blue-400 placeholder:text-slate-500"
            />

            <div className="absolute right-4 top-3.5 ">
              <LuLockKeyhole className="w-6 h-6 text-slate-500" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            확인
          </button>
        </form>
      </section>
    </div>
  );
}
