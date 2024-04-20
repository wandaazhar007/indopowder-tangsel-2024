'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './floatingCart.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '@/app/context/CartContex';
import { useContext } from 'react';
import Link from 'next/link';

const FloatingCart = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items?.reduce((sum, product: any) => sum + product.quantity, 0);

  return (
    <section className={`floatingCart ${productsCount ? 'active' : ""}`}>
      <Link href="/cart">
        <div className={`boxFloatingCart ${productsCount ? 'active' : ""}`}>
          <span className='productCount'> {productsCount}</span>
          <FontAwesomeIcon icon={faCartShopping} className='icon' />
          <span className='checkout'>Checkout</span>
        </div>
      </Link>
    </section>
  );
}

export default FloatingCart;