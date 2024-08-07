import './productList.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ProductsType } from '@/app/types/types';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/app/context/CartContex';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchContext } from '@/app/context/SearchContext';
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductList = ({ id, name, category, price, urlImage, handleModal, isLoading }: ProductsType) => {

  const [lastId, setLastId] = useState(0);
  const [tempId, setTempId] = useState(0);
  const [limit, setLimit] = useState(20);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const cart = useContext(CartContext);
  const searchContext: any = useContext(SearchContext);
  const querySearch = searchContext.querySearch;

  const handleClick2 = (id: number, nameProduct: string, price: number) => {
    cart.addOneToCart(id, nameProduct, price);
    notify();
  }

  useEffect(() => {
    // getUsers();
    // console.log(process.env.REACT_APP_ALL_USERS)
  }, [lastId, keyword]);

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
      {!querySearch ?
        (<>
          {isLoading &&
            <div className="boxProductsList">
              <div className="skeleton imageProductSkeleton">
              </div>
              <hr />
              <p className="skeleton categorySkeleton"></p>
              <h1 className="skeleton titleSkeleton"></h1>
              <p className="skeleton priceSkeleton"></p>
              <button className="skeleton buttonAddToCartSkeleton" ></button>
            </div>
          }

          {!isLoading &&
            <div className="boxProductsList" key={id}>
              <div className="imageProduct" onClick={() => handleModal(id)}>
                <Image src={urlImage} width={300} height={300} alt='indopowder tangsel' />
              </div>
              <hr />
              <p className="category">{category}</p>
              <h1 className="title" onClick={() => handleModal(id)}>{name}</h1>
              <p className="price">Rp. {price},-</p>
              <button className="buttonAddToCart" onClick={() => handleClick2(id, name, price)}><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
            </div>
          }

        </>
        ) : ''}
    </>
  );
}

export default ProductList;