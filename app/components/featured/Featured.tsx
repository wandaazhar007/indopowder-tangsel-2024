import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './featured.scss';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons/faShippingFast';
import { faComments, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons/faHandHoldingDollar';

const Featured = () => {
  return (
    <section className="featured">
      <div className="wrapContainer">
        <div className="boxFeatured">
          <div className="boxItemFeatured">
            <FontAwesomeIcon icon={faShippingFast} className='icon' />
            <div className="text">
              <h1>Free Shipping</h1>
              <p>Dapatkan pengiriman gratis untuk setiap pembelian produk kami. Hemat waktu dan biaya!</p>
            </div>
          </div>
          <div className="boxItemFeatured">
            <FontAwesomeIcon icon={faHandshake} className='icon' />
            <div className="text">
              <h1>Secure Payment</h1>
              <p>Transaksi Anda dijamin aman dengan sistem pembayaran terenkripsi dan terpercaya.</p>
            </div>
          </div>
          <div className="boxItemFeatured">
            <FontAwesomeIcon icon={faHandHoldingDollar} className='icon' />
            <div className="text">
              <h1>100% Money Back</h1>
              <p>Jika Anda tidak puas dengan produk kami, dapatkan pengembalian uang penuh.</p>
            </div>
          </div>
          <div className="boxItemFeatured">
            <FontAwesomeIcon icon={faComments} className='icon' />
            <div className="text">
              <h1>Online Support</h1>
              <p>Tim kami siap membantu Anda 24/7 dengan layanan pelanggan yang ramah dan responsif.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;