"use client";

import { createPortal } from "react-dom";

export default function Loader() {
  if (typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl z-50">
      <div className="w-16 h-16 border-4 border-b-cyan-500 rounded-full animate-spin" />
    </div>,
    document.body
  );
}
