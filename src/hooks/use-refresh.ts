"use client";

import { setTokens, setUser } from "@/store/slices/auth-slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useRefresh = <T>() => {
  const dispatch = useDispatch<AppDispatch>();
  const tokens = useSelector((state: RootState) => state.auth.tokens);
  // console.log("tokens debug in useRefresh:", tokens);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";

  // 리프레시 토큰 요청
  const refreshToken = async (): Promise<AuthResponse | null> => {
    try {
      if (!tokens?.refreshToken) {
        throw new Error("No refresh token available");
      }

      const response = await fetch(`${BASE_URL}/api/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: tokens.refreshToken }),
      });

      if (!response.ok) {
        localStorage.removeItem("tokens");
        localStorage.removeItem("user");
        throw new Error("Failed to refresh token");
      }
      const result = (await response.json()) as AuthResponse;
      dispatch(setTokens(result.tokens));
      dispatch(setUser(result.user));
      console.log("refreshed tokens:", result.user.username, result.tokens);
      return result;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return null;
    }
  };

  // fetch 시도
  const attemptFetch = async (
    url: string,
    method: string,
    accessToken: string,
    body?: string,
    retry = false
  ): Promise<Response> => {
    if (!tokens) {
      throw new Error("No tokens available");
    }

    console.log("debug fetch attempt", url, method, accessToken, body, retry);

    const response = await fetch(url, {
      method,
      body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    // 401 에러 & 재시도 안한 경우
    if (response.status === 401 && !retry) {
      const newTokens = await refreshToken();
      if (newTokens) {
        // console.log("debug retry", url, method, accessToken, body);
        return await attemptFetch(
          url,
          method,
          newTokens.tokens.accessToken,
          body,
          true
        );
      }
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  };

  // 최종
  const fetchData = async (
    url: string,
    method: string,
    body?: string
  ): Promise<T | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const accessToken = tokens?.accessToken;
      if (!accessToken) {
        throw new Error("No access token available");
      }

      const response = await attemptFetch(url, method, accessToken, body);
      if (method !== "DELETE") {
        const result = (await response.json()) as T;
        return result;
      }
      return null;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, fetchData };
};
