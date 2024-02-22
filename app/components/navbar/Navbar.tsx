'use client'
import Image from 'next/image';
import './navbar.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCartArrowDown, faCartShopping, faGear, faHandshake, faMoneyBill, faPhoneSlash, faSmile, faSquareArrowUpRight, faSignIn, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathName = usePathname();
  const [active, setActive] = useState(false);
  const handleNavbar = () => {
    setActive(!active);
  }
  const handleClickMenu = () => {
    setActive(false);
  }

  return (
    <header className="header">
      <div className="wrapContainer">
        <div className="headerContainer">
          <div className="colLeft">
            <div className="logo">
              <Image src="/assets/images/logo-indopodwer-tangsel.png" width={100} height={100} alt="Indopowder Tangsel Logo" />
            </div>
            <div className="title"><h2>Indopowder Tangsel</h2></div>
          </div>

          <div className={`colMid ${active ? 'on' : ''}`}>
            <div className="close" onClick={handleNavbar}>
              <FontAwesomeIcon icon={faClose} className="icon" />
            </div>
            <nav>
              <ul className={active ? 'on' : ''}>
                <li><Link href="/" className={pathName === '/' ? 'on' : ''} onClick={handleClickMenu}>Home</Link></li>
                <li><Link href="/tentang" className={pathName === '/tentang' ? 'on' : ''} onClick={handleClickMenu}>Tentang</Link></li>
                <li><Link href="/produk">Produk</Link></li>
                <li><Link href="/ulasan">Ulasan</Link></li>
                <li><Link href="/faq">Faq</Link></li>
                <li><Link href="/kontak">Kontak</Link></li>
              </ul>
            </nav>
          </div>

          <div className={`colRight  ${active ? 'on' : ''}`}>
            <ul>
              <li>
                <Link href="/cart">
                  <button className="btn btnCart"><FontAwesomeIcon icon={faCartShopping} className="icon" /> Cart</button>
                </Link>
              </li>
              <li>
                <Link href="/cart">
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