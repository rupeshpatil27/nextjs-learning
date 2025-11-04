import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Route Handler',
  description: 'Route Handlers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{ padding: '20px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd' }}>
          <h1>Next.js Route Handler Demo</h1>
        </header>
        <main style={{ padding: '20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
