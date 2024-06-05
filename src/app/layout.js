import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlogApp",
  description: "View some blogs of rxssul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
