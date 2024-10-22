import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-page'>
      <div className="breadcrumb">
        <div className="container">
          <h3 className="title-3">
            Login
          </h3>
          <p><span>Trang chủ</span><span><i class="fa-solid fa-angle-right"></i></span><span>Đăng nhập</span></p>
        </div>
      </div>

      <div className="login-form">
        <div className="login-form-wrapper">
          <h2 className="log-reg-title">
            Login
          </h2>
          <p className="log-reg-desc">
            Please login using account detail bellow.
          </p>

          <input type="text" name="" id="" placeholder='Username' />
          <input type="password" name="" id="" placeholder='Password' />

          <button className="btn log-reg-btn">Login</button> <br />

          <Link to="/register">Create Account</Link>
        </div>
        
      </div>

    </div>
  )
}

export default Login