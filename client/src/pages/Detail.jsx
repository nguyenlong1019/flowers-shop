import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import prod1Img from '../images/product/1.jpg';
import prod2Img from '../images/product/2.jpg';
import prod3Img from '../images/product/3.jpg';
import prod4Img from '../images/product/4.jpg';
import prod5Img from '../images/product/5.jpg';
import axios from 'axios';

const Detail = () => {
  const {flowerId} = useParams();

  const [flower, setFlower] = useState({
    name: '',
    categoryId: '',
    price: '',
    priceOld: '',
    image: '',
    description: ''
  });

  const [featuredFlowers, setFeaturedFlowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('/flowers/featured-products').then(response => setFeaturedFlowers(response.data));
      try {
        if (flowerId) {
          const res = await axios.get(`/flowers/${flowerId}`);
          console.log(res.data);
          setFlower({
            name: res.data[0].name,
            categoryId: res.data[0].category_id,
            price: res.data[0].price,
            priceOld: res.data[0].price_old,
            image: res.data[0].image,
            description: res.data[0].description,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [flowerId]);

  return (
    <div className='product-detail'>
      <div className="breadcrumb">
        <div className="container">
          <h3 className="title-3">
            Product Details
          </h3>
          <p><span>Trang chủ</span><span><i class="fa-solid fa-angle-right"></i></span><span>Chi tiết</span></p>
        </div>
      </div>

      <div className="product">
        <div className="product-img">
          <img src={`../upload/${flower.image}`} alt={flower.name} />
        </div>
        <div className="product-info">
          <h2 className="product-title">
            {flower.name}
          </h2>
          <p>
            <span className="price">{flower.price} đ</span>
            <span className='price-old'>{flower.priceOld} đ</span>
          </p>
          <p className='sku'>SKU: 12345</p>
          <p className="desc">
            {flower.description}
          </p>
          <div className="quantity">
            <div className="cart-plus-minus">
              <div className='group-qty'>
                <button className="dec qtybutton">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input type="text" value="0" className="cart-plus-minus-box" />
                <button className="inc qtybutton">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <button className="add-to-cart">Add to Cart</button>
              <button className="add-to-wishlist">Add to Wishlist</button>
            </div>
          </div>
          <div className="share">
            <strong>Share: </strong>
            <Link>
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-square-twitter"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link>
              <i class="fa-brands fa-pinterest"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="product-detail-info">
        <div className='container'>
          <div className='product-detail-header'>
            <Link>Mô tả</Link>
          </div>
          <div className='product-detail-body'>
            <p>
              {flower.description}
            </p>
          </div>
        </div>
      </div>

      <div className="featured-products">
        <span className='section-title-1'>
          The Most Trendy
        </span>
        <h3 className='section-title-3'>
          Sản phẩm nổi bật
        </h3>
        <div className='container g-4-wrapper'>
          {featuredFlowers.map(flower => (
            <Link to={`/detail/${flower.id}`} className='g-4'>
              <div className='g-4-img'>
                <img src={`../upload/${flower.image}`} alt={flower.name} />
              </div>
              <div className='g-4-content'>
                <h4>
                  <Link to={`/detail/${flower.id}`}>
                    {flower.name}
                  </Link>
                </h4>
                <span className='price'>{flower.price} đ</span>
                <span className='price-old'>{flower.price_old} đ</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Detail