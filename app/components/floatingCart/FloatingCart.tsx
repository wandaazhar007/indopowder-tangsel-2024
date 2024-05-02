'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './floatingCart.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '@/app/context/CartContex';
import { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

const FloatingCart = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items?.reduce((sum, product: any) => sum + product.quantity, 0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`floatingCart ${productsCount && pathname != "/cart" ? 'active' : ""} ${scrollPosition > 1400 ? "" : "test"}`}
      style={{ display: scrollPosition > 5500 ? "none" : "" }}
    >
      <Link href="/cart">
        <div className={`boxFloatingCart ${productsCount && pathname != "/cart" ? 'active' : ""}`}>
          <span className='productCount'> {productsCount}</span>
          <FontAwesomeIcon icon={faCartShopping} className='icon' />
          <span className='checkout'>Checkout</span>
        </div>
      </Link>
    </section>
  );
}

export default FloatingCart;