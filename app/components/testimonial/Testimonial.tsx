import Image from 'next/image';
import './testimonial.scss';

const Testimonial = () => {


  return (
    <section className="testimonial">
      <div className="wrapContainer">
        <div className="boxTestimonial">
          <div className="header">
            <h1>Apa Kata Pelanggan Kami?</h1>
            <p>Dengarkan cerita sukses dari pelanggan setia kami yang telah merasakan manfaat dari bubuk minuman premium kami..</p>
          </div>
          <div className="imagesTestimonial">
            <div className="boxGridItemImageTestimonial imageGrid1">
              <div className="boxItemImageTestimonial image1">
                <Image src='/assets/images/pengusaha-boba1.jpg' width={100} height={100} alt="indopowder tangsel" />
              </div>
            </div>
            <div className="boxGridItemImageTestimonial imageGrid2">
              <div className="boxItemImageTestimonial image2">
                <Image src='/assets/images/pengusaha-boba2.jpg' width={100} height={100} alt="indopowder tangsel" />
              </div>
            </div>
            <div className="boxGridItemImageTestimonial imageGrid3">
              <div className="boxItemImageTestimonial image3">
                <Image src='/assets/images/pengusaha-boba3.jpg' width={100} height={100} alt="indopowder tangsel" />
              </div>
            </div>
            <div className="boxGridItemImageTestimonial imageGrid4">
              <div className="boxItemImageTestimonial image4">
                <Image src='/assets/images/pengusaha-boba7.jpg' width={100} height={100} alt="indopowder tangsel" />
              </div>
            </div>
            <div className="boxGridItemImageTestimonial imageGrid5">
              <div className="boxItemImageTestimonial image5">
                <Image src='/assets/images/pengusaha-boba5.jpg' width={100} height={100} alt="indopowder tangsel" />
              </div>
            </div>
            <div className="boxGridItemImageTestimonial imageGrid6">
              <div className="boxItemImageTestimonial image6">
                <Image src='/assets/images/pengusaha-boba6.jpg' width={100} height={100} alt="indopowder tangsel" />
              </div>
            </div>
          </div>
          <div className="boxContentTestimonial">
            <div className="boxItemContentTestimonial testimonial1">
              <div className="groupBox">
                <p>Indopowder membuat bisnis boba saya meningkat pesat! Rasa yang konsisten dan kualitas yang tinggi benar-benar membuat pelanggan saya ketagihan.</p>
                <h1>Rina Susanti</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Penjual Boba</div>
                <div className="city">Jakarta</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial2">
              <div className="groupBox">
                <p>Dengan Indopowder, saya bisa menciptakan berbagai minuman inovatif yang disukai pelanggan. Pengiriman cepat dan layanan yang luar biasa!</p>
                <h1>Ahmad Setiawan</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Penjual Boba</div>
                <div className="city">Kota Tangerang</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial3">
              <div className="groupBox">
                <p>Kami sangat puas dengan Indopowder. Rasa yang luar biasa dan harga yang terjangkau membuat produk ini menjadi pilihan utama kami</p>
                <h1>Dwi Lestari</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Pemilik Cafe</div>
                <div className="city">Kota Bekasi</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial4">
              <div className="groupBox">
                <p>Layanan pelanggan Indopowder sangat responsif dan membantu. Bubuk minuman mereka adalah yang terbaik di pasaran!</p>
                <h1>Budi Santoso</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Penjual Minuman Aneka Rasa</div>
                <div className="city">Kota Depok</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial5">
              <div className="groupBox">
                <p>Produk Indopowder selalu memenuhi standar kualitas kami. Sangat direkomendasikan untuk siapa saja yang ingin membuka bisnis minuman.</p>
                <h1>Dani Arjuna</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Penjual Boba</div>
                <div className="city">Kota Bogor</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial6">
              <div className="groupBox">
                <p>Indopowder menawarkan varian rasa yang sangat lengkap dan berkualitas tinggi. Pelanggan saya sangat menyukai rasa minuman yang kami sajikan.</p>
                <h1>Felicia Anjani</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Penjual Boba</div>
                <div className="city">Kota Probolinggo</div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;