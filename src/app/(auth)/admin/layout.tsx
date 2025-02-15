import { Metadata } from "next";
import SoftCircleScales from "./_components/soft-circle-scales";

export const metadata: Metadata = {
  title: "Alji Books",
  description: "Book Store Application",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 text-white overflow-hidden">
      <SoftCircleScales />
      {children}
    </main>
  );
}
