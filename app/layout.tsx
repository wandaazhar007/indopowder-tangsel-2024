import './styles/globals.scss';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from './components/navbar/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indopowder Tangsel",
  description: "Indopowder Tangsel is a dynamic e-commerce website for powder drink distributors, built with Next.js, React.js, and TypeScript. It offers a visually engaging experience for users to explore and purchase a variety of powder drink products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
