import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cartEmpty.scss';
import { faCartArrowDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const CartEmpty = () => {
  return (
    <section className="cartEmpty">
      <div className="wrapContainer">
        <div className="wrapBox">
          <h1>Your Cart is Empty..</h1>
          <div className="loader"></div>
          <Link href="/">
            <button className="btnCartBack"><FontAwesomeIcon icon={faCartShopping} className="icon" />  Continue Shopping</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CartEmpty;