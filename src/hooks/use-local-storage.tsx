"use client";

import { setTokens, setUser } from "@/store/slices/auth-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useLocalStorage = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        try {
            const tokens = localStorage.getItem("tokens");
            const user = localStorage.getItem("user");

            dispatch(setTokens(tokens ? JSON.parse(tokens) : null));
            dispatch(setUser(user ? JSON.parse(user) : null));

            console.log("localStorage is ready");
        } catch (error) {
            console.error("Failed to parse localStorage data:", error);
        }
    }, [dispatch]);

    return null;
};
