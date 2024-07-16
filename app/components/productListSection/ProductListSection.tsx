'use client'
import Image from 'next/image';
import './productListSection.scss';
import '../productList/productList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCartArrowDown, faLongArrowDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { CartContext } from '@/app/context/CartContex';
import { ProductsType } from '@/app/types/types';
import ProductSingleModal from '../productSingleModal/ProductSingleModal';

const ProductListSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [propId, setPropId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCart, setIsLoadingCart] = useState(false);
  const [visibleItemCount, setVisibleItemCount] = useState(4);

  const getProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_HOMEPAGE}?limit=20`)
    setProducts(response.data.result);
  }

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItemCount(prevCount => prevCount + 4);
      setIsLoading(false);
    }, 3000)
    console.log(visibleItemCount)
  };

  useEffect(() => {
    getProducts();
  }, []);

  const cart = useContext(CartContext);

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

  const handleClick2 = (id: number, nameProduct: string, price: number) => {
    setIsLoadingCart(true);
    cart.addOneToCart(id, nameProduct, price);
    notify();
  }

  const handleModal = (id: number) => {
    setOpenModal(true);
    setPropId(id);
  }

  return (
    <section className="productListSection">
      <div className="wrapContainer">
        <div className="boxProducts">
          {products.slice(0, visibleItemCount).map((product: ProductsType) => (
            <>
              <div className="boxProductsItem" key={product.id}>
                <div className="imageProduct" onClick={() => handleModal(product.id)}>
                  <Image src={product.urlImage} width={300} height={300} alt='indopowder tangsel' />
                </div>
                <hr />
                <p className="category">{product.category.name}</p>
                <h1 className="title" onClick={() => handleModal(product.id)}>{product.name}</h1>
                <p className="price">Rp. {product.price},-</p>
                <button className="buttonAddToCart" onClick={() => handleClick2(product.id, product.name, product.price)}><FontAwesomeIcon icon={faCartArrowDown} className="icon" />Add to Cart</button>
              </div>
            </>
          ))}

        </div>
        {visibleItemCount === 20 ? (
          <button className="linkProducts"><Link href="/products"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /> Products Page</Link></button>
        ) : (
          <button className="loadMoreButton" onClick={handleLoadMore}>
            {isLoading ? (
              <div className="loaderLoadMore"></div>
            ) : <><FontAwesomeIcon icon={faLongArrowDown} className='icon' /> Load More</>}
          </button>
        )}
      </div>

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
        className="toastNotify"
      />

      {openModal && <ProductSingleModal openModal={openModal} closeModal={() => setOpenModal(false)} propId={propId} />}
    </section>
  )
}

export default ProductListSection;