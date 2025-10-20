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
  title:{
    default:"Next.js Routing",
    template:"%s | Next.js"
  },
  description: "journey of learning Next.js",
  icons:{
    icon:"next.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{backgroundColor:"lightblue",padding:"10px",fontSize:"25px"}}><p style={{textAlign:"center"}}>Header</p></header>
        {children}
      </body>
    </html>
  );
}
