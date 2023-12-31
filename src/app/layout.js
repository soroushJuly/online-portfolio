import { Roboto } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";

import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
