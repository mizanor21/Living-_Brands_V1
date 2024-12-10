import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Shared/Nav/Nav";
import Footer from "../components/Shared/Footer/Footer";
import Popup from "@/components/Popup/Popup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Living Brands",
  description: "Spark Something Real. Live Your Brands with Us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Popup />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
