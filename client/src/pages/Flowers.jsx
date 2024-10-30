import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import prod1Img from '../images/product/1.jpg';
import prod2Img from '../images/product/2.jpg';
import prod3Img from '../images/product/3.jpg';
import prod4Img from '../images/product/4.jpg';
import prod5Img from '../images/product/5.jpg';
import prod6Img from '../images/product/6.jpg';
import prod7Img from '../images/product/7.jpg';
import prod8Img from '../images/product/8.jpg';
import prod9Img from '../images/product/9.jpg';
import axios from 'axios';

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [filteredFlowers, setFilteredFlowers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/flowers/product-list');
        setFlowers(res.data);
        setFilteredFlowers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = flowers.filter(flower => 
      flower.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFlowers(filtered);
  }

  return (
    <div className='flowers-list'>
      <div className="breadcrumb">
        <div className="container">
          <h3 className="title-3">
            Product Details
          </h3>
          <p><span>Trang chủ</span><span><i class="fa-solid fa-angle-right"></i></span><span>Cửa hàng</span></p>
        </div>
      </div>

      <div className='product-list container'>
        <div className='search-section'>
          <div className='group-input'>
            <input type='text' name='search' value={searchTerm} onChange={handleSearch} placeholder='Tìm kiếm hoa' />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className='g-3-wrapper'>
          {filteredFlowers.map(flower => (
            <Link to={`/detail/${flower.id}`} className="g-3">
              <div className="g-3-img">
                <img src={`../upload/${flower.image}`} alt={flower.name} />
              </div>
              <div className="g-3-info">
                <h4>
                  <Link to={`/detail/${flower.id}`}>{flower.name}</Link>
                </h4>
                <span className="price">{flower.price} đ</span>
                <span className="price-old">{flower.price_old} đ</span>
              </div>
            </Link>
          ))}
          
          

        </div>
      </div>
    </div>
  );
}

export default Flowers;