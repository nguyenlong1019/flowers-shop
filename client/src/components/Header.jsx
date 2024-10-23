import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo/logo.png';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import {AuthContext} from "../context/authContext";

const Header = () => {
  const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className='header'>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links">
          <Link className='active'>Trang chủ</Link>
          <Link>Về chúng tôi</Link>
          <Link to="/flowers">Hoa</Link>
          <Link>Bài viết</Link>
          <Link>Liên hệ</Link>
        </div>
        <div className="actions">
          <Link to="/cart"><ShoppingCart /></Link>
          {currentUser ? (
            <>
              <Link to="/">{currentUser.username}</Link>
              <Link onClick={logout}>Đăng xuất</Link>
            </>
          ) : (
            <Link to="/login">Đăng nhập</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;