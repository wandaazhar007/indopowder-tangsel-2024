import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.scss';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';

const ContactPage = () => {
  return (
    <section className="contact">
      <div className="wrapContainer">
        <div className="row1">
          <div className="colLeftRow1">
            <h1>Kami Disini untuk wujudkan bisnis Anda...!</h1>
            <p>We&apos;d love to hear from you! Whether you have a question, want to book a table, or simply crave a sizzling hibachi experience.</p>
          </div>
          <div className="colRightRow1">
            <h1>Let&apos;s Talk.</h1>
            <p>Have a question or want to make a reservation? Give us a call and our friendly staff will be delighted to assist you.</p>
            <div className="buttonCall">
              <Link href="tel:+621384509642" target="_blank" rel="noreferrer">
                <button><FontAwesomeIcon icon={faPhone} className='icon' /> Call Us</button>
              </Link>
              <Link href="mailto:indopowder.tangsel@gmail.com" target="_blank" rel="noreferrer">
                <button><FontAwesomeIcon icon={faEnvelope} className='icon' /> Email Us</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row2">
          <div className="colLeftRow2">

            <div className="title">
              <div className="boxImage">
                <Image width={500} height={500} src="/assets/images/logo-indopodwer-tangsel.png" alt="Indopowder Tangsel" />
              </div>
              <div className="groupTitle">
                <h1>Indopowder Tangsel</h1>
                <p>by Indopowder Indonesia</p>
              </div>
            </div>

            <div className="address">
              <h3>Address:</h3>
              <p>Jl.Cendrawasih No.58 Kelurahan Cipayung, Kecamatan Ciputat Tangerang Selatan</p>
            </div>

            <div className="hours">
              <h3>Hours:</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="days">Sun:</td>
                    <td className="clock">08:00 AM - 05:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Mon:</td>
                    <td className="clock">08:00 AM - 05:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Tue:</td>
                    <td className="clock">08:00 AM - 05:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Wed:</td>
                    <td className="clock">08:00 AM - 05:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Thu:</td>
                    <td className="clock">08:00 AM - 05:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Fri:</td>
                    <td className="clock">08:00 AM - 05:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Sat:</td>
                    <td className="clock">08:00 AM - 05:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="contact">
              <h3>Contact</h3>
              <table>
                <tbody>
                  <tr>
                    <td className='titleContact'>Phone:</td>
                    <td className="detailContact"><Link href="tel:+621384509642" target="_blank" rel="noreferrer">0813-8450-9642 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></Link> </td>
                  </tr>
                  <tr>
                    <td className="titleContact">E-mail:</td>
                    <td className="detailContact"><Link href="mailto:indopowder.tangsel@gmail.com" target="_blank" rel="noreferrer">indopowder.tangsel@gmail.com <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          <div className="colRightRow2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.50666645762!2d106.7511456!3d-6.328329699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f10a8b9df513%3A0x43ada7de121443a!2sJual%20Bubuk%20Minuman%20Indopowder%20Tangsel!5e0!3m2!1sen!2sus!4v1709590314778!5m2!1sen!2sus"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;