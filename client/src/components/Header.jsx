import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo/logo.png';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className='header'>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links">
          <Link className='active'>Trang chủ</Link>
          <Link>Về chúng tôi</Link>
          <Link>Hoa</Link>
          <Link>Bài viết</Link>
          <Link>Liên hệ</Link>
        </div>
        <div className="actions">
          <ShoppingCart />
          <Link>Nguyen Long</Link>
          <Link>Đăng xuất</Link>

          {/* <Link>Đăng nhập</Link>
          <Link>Đăng xuất</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;