"use client";
import { useFetch } from "@/hooks/use-fetch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuLockKeyhole } from "react-icons/lu";
import { toast } from "react-toastify";
import { LuLockKeyholeOpen } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setTokens, setUser } from "@/store/slices/auth-slice";

export default function Page() {
  const BASE_URL =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";
  const url = `${BASE_URL}/api/auth/admin`;

  const { data, error, isLoading, fetchData } = useFetch<AuthResponse>();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      console.log(data);
      // localStorage.setItem("tokens", JSON.stringify(data.tokens));
      // localStorage.setItem("user", JSON.stringify(data.user));
      dispatch(setTokens(data.tokens));
      dispatch(setUser(data.user));
      router.push("/");
    }
  }, [data, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchData(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center">
      <section className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <h2 className="text-4xl font-bold mb-8 text-center text-slate-800">
          로그인
        </h2>

        <form onSubmit={handleSubmit} className="text-slate-600 space-y-6">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="패스워드를 입력하세요"
              className="w-full pl-6 pr-4 py-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-slate-200 focus:outline-none focus:border-blue-400 placeholder:text-slate-500"
            />

            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 cursor-pointer"
            >
              {!showPassword ? (
                <LuLockKeyhole className="w-6 h-6 text-slate-500" />
              ) : (
                <LuLockKeyholeOpen className="w-6 h-6 text-slate-500" />
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            확인
          </button>
        </form>
      </section>
    </div>
  );
}
