'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './hero.scss';
import { faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react";
import boba1 from "../../../public/assets/animation/boba1.json";
import boba2 from "../../../public/assets/animation/boba2.json";
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="wrapContainer">
        <div className="boxPrimary">
          <div className="colLeft">
            <h1>Bubuk Minuman Premium untuk Kesuksesan Bisnis Anda</h1>
            <h3>Rasakan kelezatan luar biasa di setiap tegukan. Indopowder adalah pilihan terbaik untuk minuman boba dan aneka rasa Anda. Tingkatkan penjualan dan buat pelanggan Anda ketagihan.&apos;</h3>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <p>Rating on google</p>
            </div>
            <button className="btnCta"><FontAwesomeIcon icon={faPhone} />Konsultasi Gratis</button>
          </div>
          <div className="colRight">
            <div className="boxRight boxRight1">
              <h2>Indopowder Tangsel</h2>
            </div>
            <div className="boxRight boxRight2">
              <Lottie animationData={boba1} loop={true} className='animationBoba1' />
            </div>
            <div className="boxRight boxRight3">
              <Lottie animationData={boba2} loop={true} className='animationBoba2' />
            </div>
            <div className="boxRight boxRight4">
              <a href="#">
                <Image src='/assets/images/tokopedia-indopowder-tangsel-v2.png' width={300} height={40} alt='Indopowder Tangsel' />
              </a>
              <a href="#">
                <Image src='/assets/images/shopee-indopowder-tangsel-v2.png' width={300} height={40} alt='Indopowder Tangsel' />
              </a>
            </div>
            {/* <div className="boxRight boxRight5">
              <a href="#">
                <img src='./assets/images/shopee-indopowder-tangsel-v2.png' />
              </a>
            </div> */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;