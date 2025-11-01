import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Intercepting Routes",
  description: "Next.js Intercepting Routes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 bg-white shadow-md">
         <nav className="flex space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <Link href="/same-level" className="text-blue-600 hover:underline">Same Level Demo</Link>
            <Link href="/one-up" className="text-blue-600 hover:underline">One Up Demo</Link>
            <Link href="/two-up/level-two" className="text-blue-600 hover:underline">Two Up Demo</Link>
            <Link href="/root-level" className="text-blue-600 hover:underline">Root Level Demo</Link>
          </nav>
        </header>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
