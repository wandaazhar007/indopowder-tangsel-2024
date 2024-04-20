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
    // <div className="cartContents">
    //   <div className="colLeftContentsCart">
    //     <h1 className="title">Your Cart</h1>
    //     <p className="totalOrder">Total Order 2 items</p>
    //     <div className="listItemsCart">
    //       <div className="boxItemsCart">
    //         <div className="image">
    //           <Image src={urlImage} width={100} height={100} alt="images" />
    //         </div>
    //         <div className="title">
    //           <div className="detail">
    //             <p className="nameProductsItemsCart">{name}</p>
    //             <p className="priceProductsItemsCart">{price}</p>
    //           </div>
    //           <div className="buttonIncreaseGroup">
    //             <span onClick={() => cart.removeOneFromCart(id)}>-</span>
    //             <span>{quantity}</span>
    //             <span onClick={() => cart.addOneToCart(id, name, price)}>+</span>
    //           </div>
    //         </div>
    //         <div className="deleteCart">
    //           <span>{(quantity * price).toFixed(2)}</span>
    //           <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => cart.deleteFromCart(id)} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="colRightContentsCart">
    //     <div className="pickupLocation">
    //       <div className="headerPickupLocation">
    //         <h1>HOW TO GET IT</h1>
    //       </div>
    //       <div className="bodyAddress">
    //         <div className="boxAddress">
    //           <FontAwesomeIcon icon={faMapLocation} className="icon" />
    //           Pickup: 26425 Novi Road Suite C
    //         </div>
    //         <div className="boxAddress">
    //           <FontAwesomeIcon icon={faClock} className="icon" />
    //           Today at 6:10 PM
    //         </div>
    //       </div>
    //     </div>
    //     <div className="addTip">
    //       <h1>ADD A TIP</h1>
    //       <div className="boxesAddTip">
    //         <button className="boxItemAddTip active">
    //           <h1>10%</h1>
    //           <h1>$40.000</h1>
    //         </button>
    //         <button className="boxItemAddTip">
    //           <h1>15%</h1>
    //           <h1>$56</h1>
    //         </button>
    //         <button className="boxItemAddTip">
    //           <h1>20%</h1>
    //           <h1>$69</h1>
    //         </button>
    //         <button className="boxItemAddTip">

    //           <h1 style={{ color: "red" }}>Cancel</h1> : <h1>Other</h1>

    //         </button>
    //       </div>
    //       <div className="customTip">
    //         <input type="number" placeholder="type your tip here..." className="inputTip" />
    //         <button className="btnCustomTip">Add</button>
    //       </div>

    //     </div>
    //     <div className="summary">
    //       <div className="boxSummary">
    //         <p>Subtotal</p>
    //         <p>$89</p>
    //       </div>
    //       <div className="boxSummary">
    //         <p>Estimated taxes (MI Sales Tax)</p>
    //         <p>$0.42</p>
    //       </div>
    //       <div className="boxSummary">
    //         <p>Tip</p>
    //         <p>$23</p>
    //       </div>
    //       <div className="boxSummary">
    //         <p>Total</p>
    //         <p>$89</p>
    //       </div>
    //       <div className="infoSummary">Additional taxes and fees will be calculated at checkout
    //       </div>
    //       <button className="btnPayment">Continue Payment (As Guest)</button>
    //       <Link className="btnLogin" href="#">Login With Google <FontAwesomeIcon icon={faGoogle} className="icon" /></Link>
    //     </div>
    //   </div>
    // </div>
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