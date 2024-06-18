import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "All Posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <nav className="navBar">

          <Link href="/">Home</Link>
          <Link href="/create">Create Post</Link>

        </nav>

        {children}

      </body>
    </html>
  );
}
