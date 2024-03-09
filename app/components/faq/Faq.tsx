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
              <label htmlFor="first">Apakah saya harus datang ke kantor Biro Jasa Sahabat?</label>
              <div className="content">
                <p>
                  Tidak, Anda tidak perlu datang ke kantor kami. Kami yang akan datang menemui Anda baik di kantor ataupun dirumah.
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="second" />
              <label htmlFor="second">Apa yang harus saya persiapkan sebelum telepon/konsultasi?</label>
              <div className="content">
                <p>Biasanya kami memerlukan beberapa informasi seperti tahun kendaraan, jenis kendaraan, lokasi kendaraan, dll</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="thrid" />
              <label htmlFor="thrid">Bagaimana jika BKPB saya masih berada di leasing?</label>
              <div className="content">
                <p>Anda bisa membuat surat pengajuan kepada leasing terkait. Kami bisa membantu jika memang Anda tidak sempat mengurusnya</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="fourth" />
              <label htmlFor="fourth">Apakah ada jaminan selama surat-surat asli saya sedang berada di tangan Biro Jasa Sahabat?</label>
              <div className="content">
                <p>Ya, kami menjamin semua surat-surat Asli kendaraan Anda. Jika terjadi kehilangan karena kelalaian pihak kami, Kami siap menggantinya</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="fifth" />
              <label htmlFor="fifth">Bagaimana saya menggunakan kendaraan saya jika STNK asli saya sedang diproses?</label>
              <div className="content">
                <p>Khusus untuk perpanjangan STNK kami menjamin 1 hari selesai. Jadi sebelum Anda menggunakan kendaraan Anda, STNK Sudah selesai</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="six" />
              <label htmlFor="six">Apa saja persyaratan-persyaratan nya?</label>
              <div className="content">
                <p>Silahkan anda bisa cek <Link href="/services"><FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /><span>DISINI</span></Link> untuk layanan-layanan beserta persyaratannya.</p>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;