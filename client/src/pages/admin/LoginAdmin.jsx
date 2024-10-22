import React from 'react';
import { Link } from 'react-router-dom';

const LoginAdmin = () => {
  return (
    <div className='login-admin-page'>
      <div className="login-admin-form">
        <h2>Login to Admin Panel</h2>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button className='btn admin-log-btn'>Login</button><br />
        <Link to="/">Back to customer page</Link>
      </div>
    </div>
  );
}

export default LoginAdmin;