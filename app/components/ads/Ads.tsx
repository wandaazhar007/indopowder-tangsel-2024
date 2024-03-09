import Image from 'next/image';
import './ads.scss';

const Ads = () => {
  return (
    <section className="ads">
      <div className="wrapContainer">
        <div className="boxAds">
          <div className="boxItemAds ads1">
            <Image src="/assets/images/post-instagram-1.JPG" width={300} height={300} alt='indopowder tangsel' />
          </div>
          <div className="boxItemAds ads2">
            <Image src="/assets/images/post-instagram-2.PNG" width={300} height={300} alt='indopowder tangsel' />
          </div>
          <div className="boxItemAds ads3">
            <Image src="/assets/images/post-instagram-1.JPG" width={300} height={300} alt='indopowder tangsel' />
          </div>
          <div className="boxItemAds ads4">
            <Image src="/assets/images/jual-bubuk-minuman-indopowder-tangsel-3.jpg" width={400} height={200} alt='indopowder tangsel' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ads;