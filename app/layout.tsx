
import './styles/globals.scss';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import FloatingCart from './components/floatingCart/FloatingCart';
import CartProvider from './context/CartContex';
import SearchProvider from './context/SearchContext';
import SessionWrapper from './lib/SessionWrapper';
import NavbarNew from './components/navbarNew/NavbarNew';
// import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indopowder Tangsel",
  description: "Indopowder Tangsel is a dynamic e-commerce website for powder drink distributors, built with Next.js, React.js, and TypeScript. It offers a visually engaging experience for users to explore and purchase a variety of powder drink products.",
};
// const pathname = usePathname();
// console.log('test', pathname);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <CartProvider>
          <SearchProvider>
            <body>
              {/* <Navbar /> */}
              <NavbarNew />
              {children}
              <FloatingCart />
              <Footer />
            </body>
          </SearchProvider>
        </CartProvider>
      </html>
    </SessionWrapper>
  );
}
