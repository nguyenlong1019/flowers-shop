import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    "username": "",
    "email": "",
    "password": ""
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };


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

          <form action="">
            <input type="text" onChange={handleChange} name="username" id="" placeholder='Username' required/>
            <input type="email" onChange={handleChange} name="email" id="" placeholder='Email' required/>
            <input type="password" onChange={handleChange} name="password" id="" placeholder='Password' required/>

            <button onClick={handleSubmit} className="btn log-reg-btn">Register</button><br />
          </form>
          {err && <p>{err}</p>}

          <Link to="/login">Login Account</Link>
        </div>
        
      </div>

    </div>
  )
}

export default Register