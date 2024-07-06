import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.scss';
import { faGlassCheers, faHandshake, faHospitalAlt, faMoneyBill, faQuoteLeftAlt, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BranchShop from '../components/branchShop/BranchShop';
const AboutPage = () => {

  return (
    <section className="about">
      <div className="wrapContainer">
        <div className="row1">
          <div className="gridRow1">
            <div className="box box1">
              <FontAwesomeIcon icon={faHandshake} className="icon" />
              <span>
                Ambil langkah besar dalam bisnis minuman Anda dengan menjadi bagian dari jaringan waralaba kami yang sukses!
              </span>
            </div>
            <div className="box box2">
              <span>10 Tahun<span>

                Indopowder telah menjadi pilihan utama pengusaha kuliner berkat kualitas dan kepercayaan yang telah dibangun sejak 2015 <FontAwesomeIcon icon={faQuoteLeftAlt} className='icon' />
              </span>
              </span>
            </div>
            <div className="box box3">
              <FontAwesomeIcon icon={faGlassCheers} className='icon' />
              <span>
                Tidak yakin? Coba dulu produk kami dengan sampel rasa gratis sebelum Anda membeli dalam jumlah besar.
              </span>
            </div>
            <div className="box box4">
              <span>Halal<span>Kami memastikan setiap produk memenuhi standar kualitas dan kehalalan untuk kepuasan dan keamanan konsumen.</span></span>
            </div>
            <div className="box box5">
              <FontAwesomeIcon icon={faUserFriends} className='icon' />
              <span>Jadilah bagian dari komunitas besar yang telah merasakan manfaat dari produk kami yang berkualitas.</span>
            </div>
            <div className="box box6">
              <span>Ekonomis <span>Produk kami sangat ekonomis dan efisien, membuat bisnis minuman Anda lebih menguntungkan.</span></span>
            </div>
          </div>
        </div>

        <div className="row2">
          <div className="gridRow2">
            <div className="box box1">
              <h1 className="title">Sudah mulai buka usaha sendiri?</h1>
              <p className="details">
                Kami Siap Menjadi Partner Anda Untuk Mensupply Kebutuhan Usaha Anda, Baik Caffe, Restoran, Waralaba Dan Usaha Minuman Lainnya
              </p>
            </div>
            <div className="box box2">
              <h1 className="title">Rajanya Bubuk Minuman</h1>
              <p className="details">
                Sejak tahun 2015 dipercaya oleh ribuan pengusaha kuliner di seluruh Indonesia mulai dari pengusaha UMKM hingga hotel, cafe & resto. Dengan proses produksi bubuk minuman yang higienis, bahan baku yang bersertifikasi halal dari MUI dan PIRT dari Dinas Kesehatan, Indopowder menjadi pilihan tepat bagi seluruh pelaku usaha kuliner untuk menjadi supplier bubuk minuman.
              </p>
            </div>
          </div>
        </div>

        <div className="row3">
          <div className="gridRow3">
            <div className="box box1">
              <div className="imageWrapper">
                <Image src="/assets/images/about-indopowdertangsel-rev-1.jpg" layout="fill" alt='indopowder tangsel' />
              </div>
            </div>
            <div className="box box2">
              <div className="imageWrapper">
                <Image src="/assets/images/about-indopowdertangsel-rev-2.jpg" layout='fill' alt='indopowder tangsel' />
              </div>
            </div>
            <div className="box box3">
              <div className="imageWrapper">
                <Image src="/assets/images/about-indopowdertangsel-rev-5.jpg" layout='fill' alt='indopowder tangsel' />
              </div>
            </div>
            <div className="box box4">Mari Kita Bersama-Sama Wujudkan Usaha Impian Anda. Indopowder telah menjadi pilihan utama pengusaha kuliner berkat kualitas dan kepercayaan yang telah dibangun sejak 2015</div>
            <div className="box box5">
              <div className="imageWrapper">
                <Image src="/assets/images/about-indopowdertangsel-rev-4.jpg" layout='fill' alt='indopowder tangsel' />
              </div>
            </div>
            <div className="box box6">
              <div className="imageWrapper">
                <Image src="/assets/images/about-indopowdertangsel-rev-3.jpg" layout='fill' alt='indopowder tangsel' />
              </div>
            </div>
            <div className="box box7">
              <div className="imageWrapper">
                <Image src="/assets/images/about-indopowdertangsel-rev-6.jpg" layout='fill' alt='indopowder tangsel' />
              </div>
            </div>
            <div className="box box8">
              Indopowder telah menjadi pilihan utama pengusaha kuliner berkat kualitas dan kepercayaan yang telah dibangun sejak 2015
            </div>
          </div>
        </div>

        <BranchShop />
      </div>


    </section>
  )
}

export default AboutPage;