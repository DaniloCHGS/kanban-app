import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { App } from "./app";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanan",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <App>
          {children}
          <Toaster />
        </App>
      </body>
    </html>
  );
}
