'use client'
import { useState, useContext } from 'react';
import './productSingleModal.scss';
import { openModalTypes } from '@/app/types/types';
import { CartContext } from '@/app/context/CartContex';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";

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
      setPrice(response.data.desc);
      setUrlImage(response.data.urlImage);
      setIsLoading(false);
    }, 500)
  }

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
        <div className="container">
          <h1>Test {propId}</h1>
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