import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
    // for add new or update user info 
    const {userId} = useParams();
    const navigate = useNavigate();
    const [err, setErr] = useState("");

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user'
    });

    useEffect(() => {
        if (userId) {
            const fetchUser = async () => {
                try {
                    const res = await axios.get(`/users/${userId}`);
                    // console.log(res.data);
                    setFormData({
                        username: res.data[0].username,
                        email: res.data[0].email,
                        password: '',
                        role: res.data[0].role,
                    });
                } catch (err) {
                    console.error(err);
                    setErr(err);
                }
            };

            fetchUser();
        }
    }, [userId]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (userId) {
                // update user 
                await axios.put(`/users/${userId}`, formData);
            } else {
                // add new user 
                await axios.post(`/users`, formData);
            }
            navigate('/admin/users');
        } catch (err) {
            console.error(err);
            setErr(err.response.data.sqlMessage);
        }
    }

    // console.log(formData);
    

  return (
    <div className='info-user-page'>
        <h2 className='admin-tilte'>{userId ? 'Cập nhật thông tin người dùng' : 'Thêm mới nguời dùng'}</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Tên tài khoản</label>
                <input type="text" name='username' id='username' value={formData.username} onChange={handleChange} required disabled={!!userId}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" name='password' id='password' value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select name="role" id="role" required value={formData.role} onChange={handleChange}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            {err && <p style={{color: 'red'}}>{err}</p>}
            <button className='btn-save' type="submit">{userId ? 'Cập nhật' : 'Thêm mới'}</button>
        </form>
    </div>
  )
}

export default UpdateUser