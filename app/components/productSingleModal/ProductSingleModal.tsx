'use client'
import { useState, useContext, useEffect } from 'react';
import './productSingleModal.scss';
import { openModalTypes } from '@/app/types/types';
import { CartContext } from '@/app/context/CartContex';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faClose } from '@fortawesome/free-solid-svg-icons';

const ProductSingleModal = ({ openModal, closeModal, propId }: openModalTypes) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBtn, setIsLoadingBtn] = useState(true);
  const [nameProduct, SetNameProduct] = useState('');
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState('');
  const [urlImage, setUrlImage] = useState('');

  const cart = useContext(CartContext);

  const getProductById = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_HOMEPAGE}${propId}`)
    setTimeout(() => {
      SetNameProduct(response.data.name);
      setPrice(response.data.price);
      setDesc(response.data.desc);
      setUrlImage(response.data.urlImage);
      setIsLoading(false);
    }, 500)
  }

  const handleClick2 = (id: number, nameProduct: string, price: number) => {
    cart.addOneToCart(id, nameProduct, price);
    notify();
    setTimeout(() => {
      closeModal()
      setIsLoadingBtn(false)
    }, 2000)
  }

  useEffect(() => {
    getProductById();
  }, [])

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
      <section className="productSingleModal">
        <div className="modalProductContainer">
          {isLoading &&
            <div className="box">
              <div className="modalBody">
                <div className="contentImage skeleton skeletonImageModal">
                </div>
                <h1 className="skeleton skeletonTitleModal"></h1>
                <h1 className="skeleton skeletonPriceModal"></h1>
              </div>
              <div className="modal-footer">
                <p className="skeleton skeletonDescModal"></p>
                <p className="skeleton skeletonDescModal"></p>
                <p className="skeleton skeletonDescModal"></p>
                <button className="skeleton skeletonBtnCartModal addToCart">
                </button>
                <button className="skeleton skeletonBtnCloseModal">
                </button>
              </div>
            </div>
          }
          {!isLoading &&
            <div className="box">
              <div className="modalBody">
                <div className="contentImage">
                  <Image src={urlImage} alt="sakura sushi" width={500} height={500} />
                </div>
                <h1 className="titleDetailProduct">{nameProduct}</h1>
                {/* <h1 className="price-detail-product">${price}</h1> */}
                <h1 className="priceDetailProduct">Rp. {price},-</h1>
                <p className="descDetailProduct">{desc}</p>
              </div>
              <div className="modalFooter">
                <button className="addToCart" onClick={() => handleClick2(propId, nameProduct, price)}>
                  {/* <button className="add-to-cart" onClick={() => handleClick2()}> */}
                  {isLoadingBtn ? (
                    <>
                      <FontAwesomeIcon icon={faCartPlus} className="icon" />
                      Add To Cart
                    </>
                  ) : 'Loading..'}
                </button>
                <button className="closeBtn2" onClick={closeModal}>
                  <FontAwesomeIcon icon={faClose} className="icon" />
                </button>
              </div>
            </div>
          }
        </div>
      </section>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default ProductSingleModal;