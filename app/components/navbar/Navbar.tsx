'use client'
import Image from 'next/image';
import './navbar.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSignIn, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from 'react';
import { usePathname } from "next/navigation";
import { CartContext } from '@/app/context/CartContex';

const Navbar: React.FC = () => {
  const cart = useContext(CartContext);
  const pathName = usePathname();
  const [active, setActive] = useState(false);
  const handleNavbar = () => {
    setActive(!active);
  }
  const handleClickMenu = () => {
    setActive(false);
  }

  const productsCount = cart.items?.reduce((sum, product: any) => sum + product.quantity, 0);


  return (
    <header className="header">
      <div className="wrapContainer">
        <div className="headerContainer">
          <div className="colLeft">
            <Link href="/">
              <div className="logo">
                <Image src="/assets/images/logo-indopodwer-tangsel.png" width={100} height={100} alt="Indopowder Tangsel Logo" />
              </div>
              <div className="title"><h2>Indopowder Tangsel</h2></div>
            </Link>
          </div>

          <div className={`colMid ${active ? 'on' : ''}`}>
            <div className="close" onClick={handleNavbar}>
              <FontAwesomeIcon icon={faClose} className="icon" />
            </div>
            <nav>
              <ul className={active ? 'on' : ''}>
                <li><Link href="/" className={pathName === '/' ? 'on' : ''} onClick={handleClickMenu}>Home</Link></li>
                <li><Link href="/about" className={pathName === '/about' ? 'on' : ''} onClick={handleClickMenu}>Tentang</Link></li>
                <li><Link href="/products" className={pathName === '/products' ? 'on' : ''} onClick={handleClickMenu}>Produk</Link></li>
                {/* <li><Link href="/ulasan">Ulasan</Link></li> */}
                <li><Link href="/faq" className={pathName === '/faq' ? 'on' : ''} onClick={handleClickMenu}>Faq</Link></li>
                <li><Link href="/contact" className={pathName === '/contact' ? 'on' : ''} onClick={handleClickMenu}>Kontak</Link></li>
              </ul>
            </nav>
          </div>

          <div className={`colRight  ${active ? 'on' : ''}`}>
            <ul>
              {productsCount > 0 ? (
                <li>
                  <Link href="/cart">
                    <button className="btn btnCart"><FontAwesomeIcon icon={faCartShopping} className="icon" /> {productsCount}Cart</button>
                  </Link>
                </li>
              ) : (
                <></>
              )}
              <li>
                <Link href="/login">
                  <button className="btn btnLogin"><FontAwesomeIcon icon={faSignIn} className="icon" /> Login</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="btnMenu" onClick={handleNavbar}>
            <FontAwesomeIcon icon={faBars} className="iconMenu" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;