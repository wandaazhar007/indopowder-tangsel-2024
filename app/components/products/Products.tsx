'use client'
import Image from 'next/image';
import './products.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { CartContext } from '@/app/context/CartContex';

const Products = () => {
  // const [page, setPage] = useState(0);
  // const [limit, setLimit] = useState(12);
  const [products, setProducts] = useState<any>([]);

  const getProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_HOMEPAGE}`)
    setProducts(response.data.result);
  }

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products)
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
    // console.log("first")
    notify();
  }

  return (
    <section className="products">
      <div className="wrapContainer">
        <div className="boxProducts">
          {products.map((product: any) => (
            <div className="boxProductsItem" key={product.id} >
              <div className="imageProduct">
                <Image src={product.urlImage} width={300} height={300} alt='indopowder tangsel' />
              </div>
              <hr />
              <p className="category">{product.category.name}</p>
              <h1 className="title">{product.name}</h1>
              <p className="price">Rp. {product.price},-</p>
              <button className="buttonAddToCart" onClick={() => handleClick2(product.id, product.name, product.price)}><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
            </div>
          ))}

        </div>
        <button className="linkProducts"><Link href="/products"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /> View More Products</Link></button>
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
      />

    </section>
  )
}

export default Products;