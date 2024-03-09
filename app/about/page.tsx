import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.scss';
import { faGlassCheers, faHospitalAlt, faMoneyBill, faQuoteLeftAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const AboutPage = () => {

  return (
    <section className="about">
      <div className="wrapContainer">
        <div className="row1">
          <div className="gridRow1">
            <div className="box box1">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <span>
                Ini saatnya Anda menjadi pemilik Waralaba / Franchisor Nya
              </span>
            </div>
            <div className="box box2">
              <span>
                Sejak tahun 2015 dipercaya oleh ribuan pengusaha kuliner di seluruh Indonesia. <FontAwesomeIcon icon={faQuoteLeftAlt} className='icon' />
              </span>
            </div>
            <div className="box box3">
              <FontAwesomeIcon icon={faGlassCheers} className='icon' />
              <span>
                Kami menyediakan juga sample rasa jika Anda ragu
              </span>
            </div>
            <div className="box box4">
              <span>
                Bahan baku bersertifikasi <span>Halal</span> dari MUI, PIRT dan Dinas Kesehatan.
              </span>
            </div>
            <div className="box box5">
              <FontAwesomeIcon icon={faMoneyBill} className='icon' />
              <span>
                Ribuan pembeli, agent Dan reseller telah membeli, menggunakan dan menjual kembali produk kami.
              </span>
            </div>
            <div className="box box6">
              <span>
                1Kg Untuk 25 Gelass! <span>kebayangkan untungnya berapa?</span>
              </span>
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
                Sejak Tahun 2015 Dipercaya Oleh Ribuan Pengusaha Kuliner Di Seluruh Indonesia Mulai Dari Pengusaha UMKM Hingga Hotel,Cafe & Resto. Dengan Proses Produksi Bubuk Minuman Yang Higienis, Bahan Baku Yang Bersertifikasi Halal Dari MUI Dan PIRT Dari Dinas Kesehatan, Indopowder Menjadi Pilihan Tepat Bagi Seluruh Pelaku Usaha Kuliner Untuk Menjadi Supplier Bubuk Minuman.
              </p>
            </div>
          </div>
        </div>

        <div className="row3">
          <div className="gridRow3">
            <div className="box box1">
              <h1 className="title">Nikmati Kesegaran Alami</h1>
              <div className="boxImage">
                <Image src="/assets/images/boba-vector-2024-v1.png" width={300} height={300} alt='indopowder tangsel' />
              </div>

            </div>
            <div className="box box2">Box2</div>
            <div className="box box3">Box3</div>
            <div className="box box4">Mari Kita Bersama-Sama Wujudkan Usaha Impian Anda.</div>
            <div className="box box5">Box5</div>
            <div className="box box6">Box6</div>
            <div className="box box7">Box7</div>
            <div className="box box8">Urusan Bubuk Minuman Percayakan Pada Kami Ahlinya</div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default AboutPage;