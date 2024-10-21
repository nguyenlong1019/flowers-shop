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
              <Link>Về chúng tôi</Link>
            </li>
            <li>
              <Link>Liên hệ</Link>
            </li>
            <li>
              <Link>Dịch vụ của chúng tôi</Link>
            </li>
            <li>
              <Link>Tại sao chọn chúng tôi?</Link>
            </li>
            <li>
              <Link>Tuyển dụng</Link>
            </li>
          </ul>
        </div>
        <div className="single-footer">
          <h2>Quicklink</h2>
          <ul>
            <li>
              <Link>Giới thiệu</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Cửa hàng</Link>
            </li>
            <li>
              <Link>Giỏ hàng</Link>
            </li>
            <li>
              <Link>Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div className="single-footer">
          <h2>Trung tâm trợ giúp</h2>
          <ul>
            <li>
              <Link>Hỗ trợ trực tuyến</Link>
            </li>
            <li>
              <Link>Chính sách chống hàng giả</Link>
            </li>
            <li>
            <Link>Chính sách trả hàng</Link>
            </li>
            <li>
            <Link>Chính sách bảo mật</Link>
            </li>
            <li>
            <Link>Dịch vụ</Link>
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