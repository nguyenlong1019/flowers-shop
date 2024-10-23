import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    "username": "",
    "password": "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

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

          <form action="">
            <input type="text" name="username" id="" placeholder='Username' onChange={handleChange} required/>
            <input type="password" name="password" id="" placeholder='Password' onChange={handleChange} required/>

            <button onClick={handleSubmit} className="btn log-reg-btn">Login</button> <br />
          </form>
          {err && <p>{err}</p>}

          <Link to="/register">Create Account</Link>
        </div>
        
      </div>

    </div>
  )
}

export default Login