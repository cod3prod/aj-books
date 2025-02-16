import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/index.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ReduxProvider from "@/components/redux-provider";
import { ToastContainer } from "react-toastify";
import LocalStorageProvider from "@/components/local-storage-provider";

export const metadata: Metadata = {
  title: {
    default: "AJ Books",
    template: "%s | AJ Books",
  },
  description: "Book Store Application",
  icons: {
    icon: "/favicon.ico",
  },
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body>
        <ReduxProvider>
          <LocalStorageProvider />
          <Header />
          {children}
          <Footer />
          <ToastContainer position="top-left" />
        </ReduxProvider>
      </body>
    </html>
  );
}
