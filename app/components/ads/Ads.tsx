import Image from 'next/image';
import './ads.scss';

const Ads = () => {
  return (
    <section className="ads">
      <div className="wrapContainer">
        <div className="boxAds">
          <div className="boxItemAds ads1">
            <Image src="/assets/images/about-indopowdertangsel-rev-9.jpg" width={300} height={300} alt='indopowder tangsel' />
          </div>
          <div className="boxItemAds ads2">
            {/* <span>
              Mari Kita Bersama-Sama Wujudkan Usaha Impian Anda. Indopowder telah menjadi pilihan utama pengusaha kuliner Indonesia
            </span> */}
            <Image src="/assets/images/about-indopowdertangsel-rev-8.jpg" width={300} height={300} alt='indopowder tangsel' />
          </div>
          <div className="boxItemAds ads3">
            <Image src="/assets/images/about-indopowdertangsel-rev-7.jpg" width={300} height={300} alt='indopowder tangsel' />
          </div>
          <div className="boxItemAds ads4">
            <Image src="/assets/images/about-indopowdertangsel-rev-10.jpg" width={400} height={400} alt='indopowder tangsel' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ads;