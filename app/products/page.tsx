import Image from 'next/image';
import './productPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const productsPage = () => {
  return (
    <section className="productsPage">
      <div className="wrapContainer">
        <div className="searchProduct">
          <input type="text" placeholder='Search products here...' />
          <div className="btnFilter">
            <button> Bubuk Minuman</button>
            <button> Topping</button>
            <button> Coffee</button>
            <button> Matcha</button>
            <button> Sample</button>
          </div>
        </div>
        <div className="boxProductsPage">
          <div className="boxProductsItemPage">
            <div className="imageProduct">
              <Image src='/assets/images/Alpukat-avocado-1kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItemPage">
            <div className="imageProduct">
              <Image src='/assets/images/Alpukat-avocado-1kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItemPage">
            <div className="imageProduct">
              <Image src='/assets/images/Alpukat-avocado-1kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItemPage">
            <div className="imageProduct">
              <Image src='/assets/images/Alpukat-avocado-1kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItemPage">
            <div className="imageProduct">
              <Image src='/assets/images/Alpukat-avocado-1kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItemPage">
            <div className="imageProduct">
              <Image src='/assets/images/Alpukat-avocado-1kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItemPage">
            <div className="imageProduct">
              <Image src='/assets/images/Alpukat-avocado-1kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItemPage">
            <div className="imageProduct">
              <Image src='/assets/images/Alpukat-avocado-1kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default productsPage;