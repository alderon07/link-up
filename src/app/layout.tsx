import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkUp - Your Digital Identity",
  description: "Connect all your online presence in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${inter.className} min-h-screen pt-14`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
