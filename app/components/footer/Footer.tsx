'use client'
import Image from 'next/image';
import './footer.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <footer
      className="footer"
    >
      <div className="wrapContainer">
        <div className="boxFooter">

          <div className="footer1">
            <div className="boxItemFooter1 boxItem1">
              <h1 className="title">Indopowder Tangsel</h1>
              <p className="manage">Managed By Indopowder Indonesia</p>
              <p className="store">Store:</p>
              <p className="address">Jl.Cendrawasih No.58 Kelurahan Cipayung, Kecamatan Ciputat Tangerang Selatan</p>
              <div className="sosmed">
                <FontAwesomeIcon icon={faYoutube} className="icon" />
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <FontAwesomeIcon icon={faGoogle} className="icon" />
              </div>
            </div>
            <div className="boxItemFooter1 boxItem2">
              <h1 className="headerLink">
                Useful Links
              </h1>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about/#branchShop">Branch Shop</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/ketentuan-kebijakan">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="boxItemFooter1 boxItem3">
              <h1 className='titlePembayaran'>Pembayaran</h1>
              <div className="imagePembayaran">
                <Image src="/assets/images/payment2.jpg" width={400} height={400} alt='indopowder tangsel' />
              </div>
              <div className="imagePembayaran">
                <Image src="/assets/images/delivery.jpg" width={400} height={400} alt='indopowder tangsel' />
              </div>
            </div>
          </div>

          <div className="footer2">
            <p className="kebijakan">
              Kebijakan Privasi ini disertakan sebagai bagian dari ketentuan penggunaan Platform kami. Kebijakan Privasi berikut menjelaskan bagaimana kami mengumpulkan, menggunakan, mengalihkan, mengungkapkan dan melindungi Informasi Pribadi Anda yang didapatkan melalui Platform. Dengan mengunjungi, menggunakan dan/atau mendaftar di Platform, Anda setuju dan mengakui bahwa Anda telah membaca, memberikan persetujuan kepada kami dan menerima Kebijakan Privasi dan praktik-praktik yang dijelaskan dalam Kebijakan Privasi ini. Mohon agar dibaca secara teliti untuk memastikan Anda memahami praktik-praktik kebijakan privasi kami.
            </p>
            <h1 className="titleNote">Note:</h1>
            <p className="note">
              Informasi Pribadi dapat dikumpulkan secara otomatis dari Anda dengan beberapa cara ketika Anda mengunjungi, mendaftar di Platform, atau menggunakan Layanan dan kegiatan yang tersedia di Platform.Informasi Pribadi diperlukan untuk kinerja yang memadai atas kesepakatan antara Anda dengan kami dan untuk memungkinkan kami mematuhi kewajiban hukum kami.
            </p>
          </div>

          <div className="footer3">
            <h1 className="titleFooter3">Our Partnership</h1>
            <div className="boxFooter3">
              <Image src="/assets/images/tokopedia-indopowder-tangsel.png" width={100} height={100} alt="tokopedia indopowder tangsel" />
              <Image src="/assets/images/shopee-indopowder-tangsel.png" width={100} height={100} alt="shopee indopowder tangsel" />
              <Image src="/assets/images/logo-gojek.png" width={100} height={100} alt="shopee indopowder tangsel" />
            </div>
          </div>

          <div className="footer4">
            <p className='credit'>Build with ❤️ by <Link href="https://instagram.com/wanda_azharr/" target='_blank'>Wanda Azhar</Link> in Michigan, USA</p>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;