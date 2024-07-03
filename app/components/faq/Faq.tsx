'use client'
import './faq.scss';
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";
const Faq = () => {
  return (
    <section className="faq">
      <div className="wrapContainer">
        <div className="boxItemFaq">
          <div className="header">
            <h1>Hal-hal yang sering ditanyakan</h1>
            <p>Let&apos;s answer some of your questions.</p>
          </div>
          <ul className="accordion">
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="first" />
              <label htmlFor="first">Apakah saya bisa mendapatkan sampel produk sebelum membeli dalam jumlah besar?</label>
              <div className="content">
                <p>
                  Tentu, kami menyediakan sampel produk gratis untuk calon pelanggan. Anda bisa menghubungi tim kami untuk informasi lebih lanjut.
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="second" />
              <label htmlFor="second">Bagaimana cara melakukan pemesanan?</label>
              <div className="content">
                <p>Anda bisa melakukan pemesanan melalui website kami atau langsung melalui platform Tokopedia dan Shopee. Jika Anda membutuhkan bantuan, jangan ragu untuk menghubungi layanan pelanggan kami.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="thrid" />
              <label htmlFor="thrid">Apakah ada minimum order untuk mendapatkan pengiriman gratis?</label>
              <div className="content">
                <p>Tidak ada minimum order untuk mendapatkan pengiriman gratis. Kami mengerti pentingnya fleksibilitas bagi UMKM.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="fourth" />
              <label htmlFor="fourth">Berapa lama waktu yang dibutuhkan untuk pengiriman?</label>
              <div className="content">
                <p>Waktu pengiriman biasanya memakan waktu 2-3 hari kerja untuk area Jabodetabek. Untuk informasi lebih lanjut, Anda dapat menghubungi layanan pelanggan kami.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="fifth" />
              <label htmlFor="fifth">Apakah produk ini halal?</label>
              <div className="content">
                <p>Ya, semua produk kami telah mendapatkan sertifikasi halal dan diproduksi sesuai dengan standar kualitas tertinggi.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="six" />
              <label htmlFor="six">Bagaimana cara saya mengetahui status pemesanan saya?</label>
              <div className="content">
                <p>Anda dapat melacak status pemesanan Anda melalui fitur tracking di website kami atau dengan menghubungi layanan pelanggan kami untuk bantuan</p>
              </div>
              {/* <div className="content">
                <p>Silahkan anda bisa cek <Link href="/services"><FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /><span>DISINI</span></Link> untuk layanan-layanan beserta persyaratannya.</p>
              </div> */}
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="seven" />
              <label htmlFor="seven">Apakah ada diskon untuk pembelian dalam jumlah besar?</label>
              <div className="content">
                <p>Ya, kami menawarkan diskon khusus untuk pembelian dalam jumlah besar. Silakan hubungi tim sales kami untuk penawaran terbaik.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="eight" />
              <label htmlFor="eight">Bagaimana cara saya menghubungi layanan pelanggan?</label>
              <div className="content">
                <p>Anda dapat menghubungi layanan pelanggan kami melalui telepon, email, atau live chat di website kami. Tim kami siap membantu Anda 24/7.</p>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;