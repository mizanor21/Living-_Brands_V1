import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Nav from "../components/Shared/Nav/Nav";
import Footer from "../components/Shared/Footer/Footer";

export const metadata = {
  title: "Living Brands",
  description: "Spark Something Real. Live Your Brands with Us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Head component for metadata */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        {/* Semantic header for Nav */}
        <header>
          <Nav />
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Semantic footer */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
