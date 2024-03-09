import Image from 'next/image';
import './features.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassWater, faGlassWaterDroplet, faMugHot, faShop, faStore } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className="features">
      <div className="wrapContainer">
        <div className="boxFeatures">
          <div className="col colOne">

            <h1>Rajanya Bubuk Minuman</h1>
            <article>
              Sejak Tahun 2015 Dipercaya Oleh Ribuan Pengusaha Kuliner Di Seluruh Indonesia Mulai Dari Pengusaha UMKM Hingga Hotel,Cafe & Resto.
            </article>
            <span><FontAwesomeIcon icon={faGlassWaterDroplet} className='icon' /></span>
          </div>

          <div className="col colTwo">
            <h1><FontAwesomeIcon icon={faShop} className='icon' />  Udah Mulai Buka Usaha?</h1>
            <article>
              Kami Siap Menjadi Partner Anda Untuk Mensupply Kebutuhan Usaha Anda, Baik Caffe, Restoran, Waralaba Dan Usaha Minuman Lainnya.
            </article>
          </div>

          <div className="col colThree">
            <h1><FontAwesomeIcon icon={faGlassWater} className='icon' /> 1Kg Untuk 25 Gelass!!!</h1>
            <article>
              Kebayang Kan Untungnya Berapa?
              Jangan Beli Kucing Dalam Karung. Kami Menyediakan Juga Sample Rasa Jika Anda Ragu. Langsung Chat Admin Disini
            </article>
          </div>
          <div className="col colThree">
            <h1><FontAwesomeIcon icon={faGlassWater} className='icon' /> 1Kg Untuk 25 Gelass!!!</h1>
            <article>
              Kebayang Kan Untungnya Berapa?
              Jangan Beli Kucing Dalam Karung. Kami Menyediakan Juga Sample Rasa Jika Anda Ragu. Langsung Chat Admin Disini
            </article>
          </div>
          <div className="col colFour">
            <h1><FontAwesomeIcon icon={faGlassWater} className='icon' /> 1Kg Untuk 25 Gelass!!!</h1>
            <article>
              Kebayang Kan Untungnya Berapa?
              Jangan Beli Kucing Dalam Karung. Kami Menyediakan Juga Sample Rasa Jika Anda Ragu. Langsung Chat Admin Disini
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;