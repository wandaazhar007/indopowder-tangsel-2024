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
// import InfiniteScroll from 'react-infinite-scroll-component';

const ProductListSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [propId, setPropId] = useState(0);
  const [lastId, setLastId] = useState(0);
  const [tempId, setTempId] = useState(0);
  const [limit, setLimit] = useState(20);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleItemCount, setVisibleItemCount] = useState(4);

  const getProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_HOMEPAGE}?limit=20`)
    setProducts(response.data.result);
    // console.log(response.data.result);
  }

  const handleLoadMore = () => {
    // setDisplayedData(products.slice(0, visibleItemCount + 4));
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItemCount(prevCount => prevCount + 4);
      setIsLoading(false);
    }, 700)
    console.log(visibleItemCount)
  };

  // const getProductInfinite = async () => {
  //   const response = await axios.get(`${}?search_query=${keyword}&lasiId=${lastId}&limit=${limit}`);
  //   const newProducts = response.data.result;
  //   setProducts([...products, ...newProducts]);
  //   setTempId(response.data.lastId);
  //   setHasMore(response.data.hasMore);
  // }


  const fetchMore = () => {
    setTimeout(() => {
      setLastId(tempId);
    }, 1000)
  };

  const searchData = (e: any) => {
    e.preventDefault();
    setLastId(0);
    setProducts([]);
    setKeyword(query);
  };

  useEffect(() => {
    getProducts();
    // console.log(products)
    // getProductInfinite();
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
    cart.addOneToCart(id, nameProduct, price);
    notify();
  }

  const handleModal = (id: number) => {
    // const handleModal = ({ slug, id, name, price }: ModalType) => {
    setOpenModal(true);
    setPropId(id);
  }

  return (
    <section className="productListSection">
      {/* <InfiniteScroll
        dataLength={products.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
      > */}

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
                <button className="buttonAddToCart" onClick={() => handleClick2(product.id, product.name, product.price)}><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
              </div>
              {isLoading ? (
                <div className="boxProductsList">
                  <div className="skeleton imageProductSkeleton">
                  </div>
                  <hr />
                  <p className="skeleton categorySkeleton"></p>
                  <h1 className="skeleton titleSkeleton"></h1>
                  <p className="skeleton priceSkeleton"></p>
                  <button className="skeleton buttonAddToCartSkeleton" ></button>
                </div>
              ) : (
                // <div className="boxProductsItem" key={product.id}>
                //   <div className="imageProduct" onClick={() => handleModal(product.id)}>
                //     <Image src={product.urlImage} width={300} height={300} alt='indopowder tangsel' />
                //   </div>
                //   <hr />
                //   <p className="category">{product.category.name}</p>
                //   <h1 className="title" onClick={() => handleModal(product.id)}>{product.name}</h1>
                //   <p className="price">Rp. {product.price},-</p>
                //   <button className="buttonAddToCart" onClick={() => handleClick2(product.id, product.name, product.price)}><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
                // </div>
                ''
              )}
            </>
          ))}

        </div>
        {/* <button className="linkProducts"><Link href="/products"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /> View More Products</Link></button> */}
        {visibleItemCount === 20 ? (
          <button className="linkProducts"><Link href="/products"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /> Products Page</Link></button>
        ) : (
          <button className="linkProducts" onClick={handleLoadMore}>
            {isLoading ? 'Loading...' : <><FontAwesomeIcon icon={faLongArrowDown} className='icon' /> Load More</>}
          </button>
        )}
        {/* <button className="linkProducts" onClick={handleLoadMore}>
          {isLoading ? 'Loading...' : <><FontAwesomeIcon icon={faLongArrowDown} className='icon' /> Load More</>}
        </button> */}
      </div>
      {/* </InfiniteScroll> */}

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