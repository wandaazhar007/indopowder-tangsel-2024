'use client'
import Image from 'next/image';
// import './cartList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { CartContext } from '@/app/context/CartContex';
import { useContext, useState } from 'react';

const CartList = ({ id, quantity }: { id: number, quantity: number }) => {
  const cart = useContext(CartContext);
  const [name, setname] = useState("");
  const [price, setPrice] = useState(0);
  const [urlImage, setUrlImage] = useState("");

  const getProductData = async (id: number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_ALL_CART}`);
    const data = await response.json();
    const productData = data.find((product: any) => product.id === id);
    return productData;
  }
  getProductData(id).then((result: any) => {
    setname(result.name);
    setPrice(result.price);
    setUrlImage(result.urlImage)
  })

  return (
    <div className="listItemsCart">
      <div className="boxItemsCart">
        <div className="image">
          <Image src={urlImage} width={100} height={100} alt="images" />
        </div>
        <div className="title">
          <div className="detail">
            <p className="nameProductsItemsCart">{name}</p>
            <p className="priceProductsItemsCart">{price}</p>
          </div>
          <div className="buttonIncreaseGroup">
            <span onClick={() => cart.removeOneFromCart(id)}>-</span>
            <span>{quantity}</span>
            <span onClick={() => cart.addOneToCart(id, name, price)}>+</span>
          </div>
        </div>
        <div className="deleteCart">
          <span>{(quantity * price)}</span>
          <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => cart.deleteFromCart(id)} />
        </div>
      </div>
    </div>
  );
}

export default CartList;