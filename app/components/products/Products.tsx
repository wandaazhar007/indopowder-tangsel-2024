import Image from 'next/image';
import './products.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToFile, faArrowUpRightFromSquare, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Products = () => {

  return (
    <section className="products">
      <div className="wrapContainer">
        <div className="boxProducts">
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/Alpukat-avocado-1kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/Anggur-1Kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Red Velvet</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/Avocado-coffee-1Kg.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Vanilla Latte</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/makanan-khas-indonesia.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Matcha Green Tea</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/nasi-goreng.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Cappucino</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/kwetiaw.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Machiato</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/lalaban.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/makanan-khas-indonesia.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/nasi-goreng.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/lalaban.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/makanan-khas-indonesia.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>
          <div className="boxProductsItem">
            <div className="imageProduct">
              <Image src='/assets/images/nasi-goreng.jpg' width={300} height={300} alt='indopowder tangsel' />
            </div>
            <hr />
            <p className="category">Bubuk Minuman</p>
            <h1 className="title">Taro</h1>
            <p className="price">Rp. 47.500,-</p>
            <button className="buttonAddToCart"><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
          </div>

        </div>
        <button className="linkProducts"><Link href="/products"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /> View More Products</Link></button>
      </div>
    </section>
  )
}

export default Products;