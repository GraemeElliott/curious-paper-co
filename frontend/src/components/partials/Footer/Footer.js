import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/cpc-logo.jpg';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-info">
        <Link className="logo-wrapper-footer" to="/">
          <img className="logo-img-footer" src={logo} alt="" />
        </Link>
        <div className="bio-footer">
          The Curious Paper Co. is an online store specialising in notebooks,
          art prints and stationary. We are a small but close and friendly team
          located in Edinburgh. Get in touch if you have any questions!
        </div>

        <div className="social-icons">
          {/* <a href="/"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="/"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="/"><FontAwesomeIcon icon={faInstagram}/></a> */}
        </div>
      </div>

      <ul className="footer-nav">
        <li className="nav-item">
          <h2 className="nav-title">Shop</h2>

          <ul className="nav-ul">
            <li>
              <a href="/">Stores</a>
            </li>

            <li>
              <a href="/">Brands/Artists</a>
            </li>

            <li>
              <a href="/">Gift Ideas</a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <h2 className="nav-title">About</h2>

          <ul className="nav-ul">
            <li>
              <a href="/">About Us</a>
            </li>

            <li>
              <a href="/">Careers</a>
            </li>

            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <h2 className="nav-title">Media</h2>

          <ul className="nav-ul">
            <li>
              <a href="/">Online</a>
            </li>

            <li>
              <a href="/">Print</a>
            </li>

            <li>
              <a href="/">Advertise</a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <h2 className="nav-title">Help</h2>

          <ul className="nav-ul">
            <li>
              <a href="/">FAQ</a>
            </li>

            <li>
              <a href="/">Accessibility</a>
            </li>

            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="legal">
        <p>
          &copy; {new Date().getFullYear()} The Curious Paper Co. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
