import React from 'react';
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

const Flowers = () => {
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
            <input type='text' placeholder='Tìm kiếm hoa' />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className='g-3-wrapper'>
          
          <Link to="/detail" className="g-3">
            <div className="g-3-img">
              <img src={prod1Img} alt="" />
            </div>
            <div className="g-3-info">
              <h4>
                <Link>Hoa Hồng</Link>
              </h4>
              <span className="price">90,000 đ</span>
              <span className="price-old">110,000 đ</span>
            </div>
          </Link>
          <Link to="/detail" className="g-3">
            <div className="g-3-img">
              <img src={prod2Img} alt="" />
            </div>
            <div className="g-3-info">
              <h4>
                <Link>Hoa Hồng</Link>
              </h4>
              <span className="price">90,000 đ</span>
              <span className="price-old">110,000 đ</span>
            </div>
          </Link>
          <Link to="/detail" className="g-3">
            <div className="g-3-img">
              <img src={prod3Img} alt="" />
            </div>
            <div className="g-3-info">
              <h4>
                <Link>Hoa Hồng</Link>
              </h4>
              <span className="price">90,000 đ</span>
              <span className="price-old">110,000 đ</span>
            </div>
          </Link>

          <Link to="/detail" className="g-3">
            <div className="g-3-img">
              <img src={prod4Img} alt="" />
            </div>
            <div className="g-3-info">
              <h4>
                <Link>Hoa Hồng</Link>
              </h4>
              <span className="price">90,000 đ</span>
              <span className="price-old">110,000 đ</span>
            </div>
          </Link>
          <Link to="/detail" className="g-3">
            <div className="g-3-img">
              <img src={prod5Img} alt="" />
            </div>
            <div className="g-3-info">
              <h4>
                <Link>Hoa Hồng</Link>
              </h4>
              <span className="price">90,000 đ</span>
              <span className="price-old">110,000 đ</span>
            </div>
          </Link>
          <Link to="/detail" className="g-3">
            <div className="g-3-img">
              <img src={prod6Img} alt="" />
            </div>
            <div className="g-3-info">
              <h4>
                <Link>Hoa Hồng</Link>
              </h4>
              <span className="price">90,000 đ</span>
              <span className="price-old">110,000 đ</span>
            </div>
          </Link>

          <Link to="/detail" className="g-3">
            <div className="g-3-img">
              <img src={prod7Img} alt="" />
            </div>
            <div className="g-3-info">
              <h4>
                <Link>Hoa Hồng</Link>
              </h4>
              <span className="price">90,000 đ</span>
              <span className="price-old">110,000 đ</span>
            </div>
          </Link>
          <Link to="/detail" className="g-3">
            <div className="g-3-img">
              <img src={prod8Img} alt="" />
            </div>
            <div className="g-3-info">
              <h4>
                <Link>Hoa Hồng</Link>
              </h4>
              <span className="price">90,000 đ</span>
              <span className="price-old">110,000 đ</span>
            </div>
          </Link>
          <Link to="/detail" className="g-3">
            <div className="g-3-img">
              <img src={prod9Img} alt="" />
            </div>
            <div className="g-3-info">
              <h4>
                <Link>Hoa Hồng</Link>
              </h4>
              <span className="price">90,000 đ</span>
              <span className="price-old">110,000 đ</span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Flowers;