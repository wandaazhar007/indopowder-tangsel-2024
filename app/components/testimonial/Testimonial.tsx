import Image from 'next/image';
import './testimonial.scss';

const Testimonial = () => {


  return (
    <section className="testimonial">
      <div className="wrapContainer">
        <div className="boxTestimonial">
          <div className="header">
            <h1>What does people says?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum libero dicta vitae, dolor laborum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore?</p>
                <h1>Yayan Suryana</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Lorem ipsum dolor sit amet.</div>
                <div className="city">Kota Probolinggo</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial2">
              <div className="groupBox">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore?</p>
                <h1>Yayan Suryana</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Lorem ipsum dolor sit amet.</div>
                <div className="city">Kota Probolinggo</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial3">
              <div className="groupBox">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore?</p>
                <h1>Yayan Suryana</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Lorem ipsum dolor sit amet.</div>
                <div className="city">Kota Probolinggo</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial4">
              <div className="groupBox">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore?</p>
                <h1>Yayan Suryana</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Lorem ipsum dolor sit amet.</div>
                <div className="city">Kota Probolinggo</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial5">
              <div className="groupBox">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore?</p>
                <h1>Yayan Suryana</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Lorem ipsum dolor sit amet.</div>
                <div className="city">Kota Probolinggo</div>
              </div>
            </div>
            <div className="boxItemContentTestimonial testimonial6">
              <div className="groupBox">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore?</p>
                <h1>Yayan Suryana</h1>
              </div>
              <div className="groupBoxDesc">
                <div className="desc">Lorem ipsum dolor sit amet.</div>
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