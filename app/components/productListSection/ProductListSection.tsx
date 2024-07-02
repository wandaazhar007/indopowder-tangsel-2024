'use client'
import Image from 'next/image';
import './productListSection.scss';
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
import InfiniteScroll from 'react-infinite-scroll-component';

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

  const [displayedData, setDisplayedData] = useState([]);
  const [visibleItemCount, setVisibleItemCount] = useState(4);

  const getProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_HOMEPAGE}?limit=20`)
    setProducts(response.data.result);
    // console.log(response.data.result);
  }

  const handleLoadMore = () => {
    // Increase the visible item count (you can adjust this logic based on your requirements)
    setVisibleItemCount(prevCount => prevCount + 4);

    // Update displayedData with additional items
    setDisplayedData(products.slice(0, visibleItemCount + 4));
    console.log(products)
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
          {displayedData.map((product: ProductsType) => (
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
            </>
          ))}
          {/* </InfiniteScroll> */}

        </div>
        {/* <button className="linkProducts"><Link href="/products"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /> View More Products</Link></button> */}
        <button className="linkProducts" onClick={handleLoadMore}><FontAwesomeIcon icon={faLongArrowDown} className='icon' /> Load More</button>
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