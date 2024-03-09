import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './floatingCart.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const FloatingCart = () => {
  return (
    <section className="floatingCart">
      <div className="boxFloatingCart">
        <FontAwesomeIcon icon={faCartShopping} className='icon' />
      </div>
    </section>
  );
}

export default FloatingCart;