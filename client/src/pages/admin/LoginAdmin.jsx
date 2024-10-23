import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const LoginAdmin = () => {
  const [inputs, setInputs] = useState({
    "username": "",
    "password": ""
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
      navigate('/admin');
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='login-admin-page'>
      <div className="login-admin-form">
        <h2>Login to Admin Panel</h2>
        <form action="">
          <input type="text" placeholder='Username' name='username' onChange={handleChange} required/>
          <input type="password" placeholder='Password' name='password' onChange={handleChange} required/>
          <button onClick={handleSubmit} className='btn admin-log-btn'>Login</button><br />
        </form>
        {err && <p>{err}</p>}
        <Link to="/">Back to customer page</Link>
      </div>
    </div>
  );
}

export default LoginAdmin;