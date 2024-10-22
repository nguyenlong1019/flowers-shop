import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='login-page'>
      <div className="breadcrumb">
        <div className="container">
          <h3 className="title-3">
            Register
          </h3>
          <p><span>Trang chủ</span><span><i class="fa-solid fa-angle-right"></i></span><span>Đăng ký tài khoản</span></p>
        </div>
      </div>

      <div className="login-form">
        <div className="login-form-wrapper">
          <h2 className="log-reg-title">
            Register
          </h2>
          <p className="log-reg-desc">
            Please Register using account detail bellow.
          </p>

          <input type="text" name="" id="" placeholder='Username' />
          <input type="text" name="" id="" placeholder='Email' />
          <input type="password" name="" id="" placeholder='Password' />

          <button className="btn log-reg-btn">Register</button><br />

          <Link to="/login">Login Account</Link>
        </div>
        
      </div>

    </div>
  )
}

export default Register