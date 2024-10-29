import React, { useEffect, useState } from 'react'
import { useNavigate, useParams

 } from 'react-router-dom';
import axios from 'axios'

const UpdateFlower = () => {
  const {flowerId} = useParams();
  const navigate = useNavigate("");

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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    
  }, [flowerId]);

  return (
    <div className='info-flower-page'>
      <h2 className="admin-title"></h2>
      <form action="">
        <div className="form-group">
          <label htmlFor=""></label>
        </div>
      </form>
    </div>
  )
}

export default UpdateFlower