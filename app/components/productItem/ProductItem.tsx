import './productItem.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ProductsType } from '@/app/types/types';
import { useContext, useState } from 'react';
import { CartContext } from '@/app/context/CartContex';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import ProductSingleModal from '../productSingleModal/ProductSingleModal';

const ProductItem = ({ id, name, category, price, urlImage, handleClick, handleModal, isLoading }: ProductsType) => {

  const [openModal, setOpenModal] = useState(false);
  // const [products, setProducts] = useState([]);
  const [propId, setPropId] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  const cart = useContext(CartContext);

  const handleClick2 = (id: number, nameProduct: string, price: number) => {
    cart.addOneToCart(id, nameProduct, price);
    notify();
  }



  // const handleModal = (id: number) => {
  //   // const handleModal = ({ slug, id, name, price }: ModalType) => {
  //   setOpenModal(true);
  //   setPropId(id);
  // }

  const notify = () => {
    toast.success('Item has been added in the cart!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>

      {isLoading && (
        <div className="boxProductsItemPage">
          <div className="imageProduct">
            <Image src="" width={300} height={300} alt='indopowder tangsel' />
          </div>
          <hr />
          <p className="category"></p>
          <h1 className="title">true</h1>
          <p className="price"></p>
          <button className="buttonAddToCart"></button>
        </div>
      )}

      {!isLoading && (
        <div className="boxProductsItemPage" key={id}>
          <div className="imageProduct" onClick={() => handleModal(id)}>
            <Image src={urlImage} width={300} height={300} alt='indopowder tangsel' />
          </div>
          <hr />
          <p className="category">{category}</p>
          <h1 className="title" onClick={() => handleModal(id)}>{name}</h1>
          <p className="price">Rp. {price},-</p>
          <button className="buttonAddToCart" onClick={() => handleClick2(id, name, price)}><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
        </div>
      )}




    </>
  );
}

export default ProductItem;