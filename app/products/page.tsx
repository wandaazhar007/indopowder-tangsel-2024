'use client'
import './productPage.scss';
import { useState, useEffect, useContext } from 'react';
import SearchProduct from '../components/searchProduct/SearchProduct';
import axios from 'axios';
import { ProductsType } from '../types/types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { CartContext } from '../context/CartContex';
import ProductSingleModal from '../components/productSingleModal/ProductSingleModal';
import ProductList from '../components/productList/ProductList';

const productsPage = () => {
  const [products, setProducts] = useState([]);
  const [keywordSearch, setKeywordSearch] = useState("");
  const [page, setPage] = useState("");
  const [limit, setLimit] = useState(12);
  const [propId, setPropId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_SEARCH}?search_query=${keywordSearch}&page=${page}&limit=${limit}`);
    setProducts(response.data.result);
  }

  useEffect(() => {
    getProducts();
  }, [keywordSearch]);

  const cart = useContext(CartContext);

  const handleModal = (id: number) => {
    setOpenModal(true);
    setPropId(id);
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


  const handleClick = (id: number, nameProduct: string, price: number) => {
    cart.addOneToCart(id, nameProduct, price);
    notify();
  }



  return (
    <>
      <section className="productsPage">
        <div className="wrapContainer">
          <SearchProduct keywordSearch={keywordSearch} setKeywordSearch={setKeywordSearch} setIsLoading={setIsLoading} />
          <div className="boxProductsPage">
            {products.map((product: ProductsType) => (
              <ProductList key={product.id} id={product.id} name={product.name} category={product.category.name} price={product.price} urlImage={product.urlImage} isLoading={isLoading} handleClick={handleClick} handleModal={handleModal} />
            ))}

            <div className="loadMoreProducts">
              <button className="btnLoadMoreProducts">Load More</button>
            </div>
          </div>
        </div>

        {openModal && <ProductSingleModal openModal={openModal} closeModal={() => setOpenModal(false)} propId={propId} />}
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
        className="toastNotify"
      />

    </>
  );
}

export default productsPage;