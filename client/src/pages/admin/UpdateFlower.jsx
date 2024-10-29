import React, { useEffect, useState } from 'react'
import { useNavigate, useParams

 } from 'react-router-dom';
import axios from 'axios'

const UpdateFlower = () => {
  const {flowerId} = useParams();
  const navigate = useNavigate();

  const [flowerData, setFlowerData] = useState({
    name: '',
    category_id: '',
    price: '',
    price_old: '',
    image: '',
    description: '',
    is_feature: false,
    is_sale: false
  });
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/categories').then(response => setCategories(response.data));

    if (flowerId) {
      console.log(flowerId);
      
      axios.get(`/flowers/${flowerId}`).then(response => {
        console.log(response.data);
        
        setFlowerData({
          name: response.data[0].name,
          category_id: response.data[0].category_id,
          price: response.data[0].price,
          price_old: response.data[0].price_old,
          image: response.data[0].image,
          description: response.data[0].description,
          is_feature: response.data[0].is_feature ? true : false,
          is_sale: response.data[0].is_sale ? true : false
        })
      });
    }

  }, [flowerId]);

  const handleInputChange = (e) => {
    const {name, value, type, checked, files} = e.target;
    if (name === 'image') {
      setFile(files[0]);
    }

    setFlowerData({
      ...flowerData,
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData);
      // console.log(res);
      
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageFileName = flowerData.image;

    if (file) {
      imageFileName = await uploadImage();
    }

    console.log(imageFileName);
    

    const updatedFlowerData = {
      ...flowerData,
      image: imageFileName,
    }

    try {
      if (flowerId) {
        // Update flower
        await axios.put(`/flowers/${flowerId}`, updatedFlowerData);
      } else {
        // Create new flower 
        await axios.post('/flowers', updatedFlowerData);
        // console.log(updatedFlowerData);
        
      }
      navigate('/admin/products');
    } catch (err) {
      console.error(err);
      alert(err);
    }
  }

  return (
    <div className='info-flower-page'>
      <h2 className="admin-title">{flowerId ? 'Cập nhật thông tin hoa' : 'Tạo mới sản phẩm hoa'}</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên loài hoa</label>
          <input type="text" name='name' id='name' value={flowerData.name} onChange={handleInputChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="category_id">Danh mục hoa</label>
          <select name="category_id" id="category_id" value={flowerData.category_id} onChange={handleInputChange}>
            <option value="">Chọn danh mục</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Giá</label>
          <input
            type="number"
            name="price"
            value={flowerData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price_old">Giá cũ</label>
          <input
            type="number"
            name="price_old"
            value={flowerData.price_old}
            onChange={handleInputChange}
            required 
          />
        </div>
        {flowerId
        ? (
          <div className="form-group">
            <label htmlFor="image">Hình ảnh</label>
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
            />
          </div>
        )
        : (
          <div className="form-group">
            <label htmlFor="image">Hình ảnh</label>
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              required 
            />
          </div>
        )}
        

        <div className="form-group">
          <label htmlFor="description">Mô tả</label>
          <textarea
            name="description"
            value={flowerData.description}
            onChange={handleInputChange}
            required 
          ></textarea>
        </div>

        <div className="form-group">
          <label>
            Sản phẩm nổi bật
          </label>
          <input
              type="checkbox"
              name="is_feature"
              checked={flowerData.is_feature}
              onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>
            Sản phẩm đang sale
          </label>
          <input
            type="checkbox"
            name="is_sale"
            checked={flowerData.is_sale}
            onChange={handleInputChange}
          />
        </div>
        
        <button className='btn-save' type="submit">{flowerId ? 'Cập nhật' : 'Tạo mới'}</button>

      </form>
    </div>
  )
}

export default UpdateFlower