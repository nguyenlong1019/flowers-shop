import React from 'react';
import { Link } from 'react-router-dom';
import LogoFooter from '../images/logo/logo-footer.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="single-footer">
          <div className="footer-logo">
            <img src={LogoFooter} alt="Logo Footer" />
          </div>
          <p className='footer-desc'>Flosun là website bán hoa tươi trực tuyến, cung cấp nhiều mẫu hoa đẹp cho các dịp đặc biệt. Dịch vụ nhanh chóng, hoa luôn tươi mới và giao hàng tận nơi.</p>
          <div className='socials'>
            <Link>
              <i class="fa-brands fa-facebook-f"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-youtube"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-vimeo-v"></i>
            </Link>
          </div>
        </div>
        <div className="single-footer">
          <h2>Information</h2>
          <ul>
            <li>
              <a href="#">Out Company</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Why We?</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="single-footer">
          <h2>Quicklink</h2>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="Contact"></a>
            </li>
          </ul>
        </div>
        <div className="single-footer">
          <h2>Support</h2>
          <ul>
            <li>
              <a href="#">Online Support</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Pricacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="single-footer">
          <h2>See Information</h2>
          <div>
            <address>
              123, ABC, Road ##, Main City, Your address goes here.
              <br />
              Phone: 01234 567 890
              <br />
              Email: https://example.com
            </address>
          </div>
        </div>
      </footer>
      <p className='copyright'>Copyright &copy; 2024 <span>KTMT</span> | Built with FloSun by <span>KTMT</span></p>
    </>
  );
}

export default Footer;