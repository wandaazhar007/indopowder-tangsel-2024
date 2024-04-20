import './productItem.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ProductsType } from '@/app/types/types';
import { useContext } from 'react';
import { CartContext } from '@/app/context/CartContex';

const ProductItem = ({ id, name, category, price, urlImage, handleClick }: ProductsType) => {

  const cart = useContext(CartContext);
  return (
    <div className="boxProductsItemPage">
      <div className="imageProduct">
        <Image src={urlImage} width={300} height={300} alt='indopowder tangsel' />
      </div>
      <hr />
      <p className="category">{category}</p>
      <h1 className="title">{name}</h1>
      <p className="price">Rp. {price},-</p>
      {cart.items?.quantity > 0 ? 'test' : <button className="buttonAddToCart" onClick={() => handleClick(id, name, price)}><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>}
      {/* <button className="buttonAddToCart" onClick={() => handleClick(id, name, price)}><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button> */}
    </div>
  );
}

export default ProductItem;