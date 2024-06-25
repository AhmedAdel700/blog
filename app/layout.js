import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "All Posts",
};

export default function RootLayout({ children }) {

  const linksArray = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/create",
      text: "Create Post",
    }
  ];

  return (
    <html lang="en">
      <body className={inter.className}>

        <nav className="navBar">

          {linksArray.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.text}
            </Link>
          ))}

        </nav>

        {children}

      </body>
    </html>
  );
}
