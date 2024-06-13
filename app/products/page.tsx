'use client'
import './productPage.scss';
import { useState, useEffect, useContext } from 'react';
import SearchProduct from '../components/searchProduct/SearchProduct';
import ProductItem from '../components/productItem/ProductItem';
import axios from 'axios';
import { ProductsType } from '../types/types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { CartContext } from '../context/CartContex';

const productsPage = () => {
  const [products, setProducts] = useState([]);
  const [keywordSearch, setKeywordSearch] = useState("");
  const [page, setPage] = useState("");
  const [limit, setLimit] = useState(12);

  const getProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_HOMEPAGE}?search_query=${keywordSearch}&page=${page}&limit=${limit}`);
    setProducts(response.data.result);
    // console.log(response.data.result);
  }

  useEffect(() => {
    getProducts();
  }, [keywordSearch]);

  const cart = useContext(CartContext);
  // console.log(cart)

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
    // console.log("first")
    notify();
  }



  return (
    <>
      <section className="productsPage">
        <div className="wrapContainer">
          <SearchProduct keywordSearch={keywordSearch} setKeywordSearch={setKeywordSearch} />
          <h4>{keywordSearch}</h4>
          <div className="boxProducts">
            {products.map((product: ProductsType) => (
              <ProductItem key={product.id} id={product.id} name={product.name} category={product.category.name} price={product.price} urlImage={product.urlImage} handleClick={handleClick} />
              // <ProductItem key={product.id} products={products} />
            ))}
          </div>
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
        className="toastNotify"
      />

    </>
  );
}

export default productsPage;