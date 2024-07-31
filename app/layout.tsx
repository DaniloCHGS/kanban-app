import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Aside } from "./components/aside";
import { MenuTop } from "./components/menu-top";

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
        <div className="grid min-h-screen grid-cols-[250px_1fr] grid-rows-[100px_1fr] bg-theme text-white">
          <Aside />
          <MenuTop />
          <main className="p-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
