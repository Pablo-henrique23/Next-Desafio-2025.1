import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "../components/header";
import "./globals.css";

const poppins = Poppins({ 
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
 });

export const metadata: Metadata = {
  title: "HardWareHouse",
  description: "A melhor loja de Hardware do mundo."
} 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
