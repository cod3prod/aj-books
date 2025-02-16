"use client";

import { useLocalStorage } from "@/hooks/use-local-storage"

export default function LocalStorageProvider() {
    useLocalStorage();
  
    return null
}