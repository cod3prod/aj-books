"use client";

import { useState } from "react";

export const useFetch = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url: string, options?: RequestInit) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, options);
      if (response.status !== 200) {
        setData(null);
        setError(new Error("Failed to fetch data"));
        return;
      }
      const result: T = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, fetchData };
};
