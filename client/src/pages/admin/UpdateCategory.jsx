import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateCategory = () => {
    // for add new or update user info 
    const {categoryId} = useParams();
    const navigate = useNavigate();
    const [err, setErr] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    useEffect(() => {
        if (categoryId) {
            const fetchCategory = async () => {
                try {
                    const res = await axios.get(`/categories/${categoryId}`);
                    // console.log(res.data);
                    setFormData({
                        name: res.data[0].name,
                        description: res.data[0].description,
                    });
                } catch (err) {
                    console.error(err);
                    setErr(err);
                }
            };

            fetchCategory();
        }
    }, [categoryId]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (categoryId) {
                // update category 
                await axios.put(`/categories/${categoryId}`, formData);
            } else {
                // add new category 
                await axios.post(`/categories`, formData);
            }
            navigate('/admin/categories');
        } catch (err) {
            console.error(err);
            setErr(err.response.data.sqlMessage);
        }
    }

  return (
    <div className='info-category-page'>
        <h2 className='admin-tilte'>{categoryId ? 'Cập nhật thông tin loại hoa' : 'Thêm mới danh mục loại hoa'}</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Tên danh mục hoa</label>
                <input type="text" name='name' id='name' value={formData.name} onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Mô tả danh mục</label>
                <textarea name="description" value={formData.description} id="description" onChange={handleChange} required />
            </div>
            {err && <p style={{color: 'red'}}>{err}</p>}
            <button className='btn-save' type="submit">{categoryId ? 'Cập nhật' : 'Thêm mới'}</button>
        </form>
    </div>
  )
}

export default UpdateCategory