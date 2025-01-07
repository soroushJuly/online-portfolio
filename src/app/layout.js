import { Raleway } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";

const inter = Raleway({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Soroush Jolai | Portfolio",
  description: "Software Engineer | Game Programmer | AI Programmer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
