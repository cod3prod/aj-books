"use client";

import { setTokens, setUser } from "@/store/slices/auth-slice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AuthHandler() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const [isHovered, setIsHovered] = useState(false);

  const disconnect = async () => {
    dispatch(setTokens(null));
    dispatch(setUser(null));
  };

  return (
    <>
      {user ? (
        <button
          className={
            "w-36 flex justify-center items-center bg-gray-100 text-gray-900 hover:text-white px-6 py-2 rounded-full hover:bg-red-500 font-semibold transition-all"
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => disconnect()}
        >
          {!isHovered ? user.username : "Disconnect"}
        </button>
      ) : (
        <Link
          href={"/admin"}
          className="w-36 flex justify-center items-center bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-300 font-semibold transition-all"
        >
            Admin
        </Link>
      )}
    </>
  );
}
