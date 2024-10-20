import React from 'react';
import {Link} from 'react-router-dom';
import cate1Img from '../images/category/home1-category-1.jpg';
import cate2Img from '../images/category/home1-category-2.jpg';
import cate3Img from '../images/category/home1-category-3.jpg';
import cate4Img from '../images/category/home1-category-4.jpg';
import cate5Img from '../images/category/home1-category-5.jpg';

import prod1Img from '../images/product/1.jpg';
import prod2Img from '../images/product/2.jpg';
import prod3Img from '../images/product/3.jpg';
import prod4Img from '../images/product/4.jpg';
import prod5Img from '../images/product/5.jpg';
import prod6Img from '../images/product/6.jpg';
import prod7Img from '../images/product/7.jpg';
import prod8Img from '../images/product/8.jpg';


const Home = () => {
  return (
    <div className='home container'>
      <div className="home-intro">
        <div className="intro-content">
          <h3>Top Trending</h3>
          <h2>2024 Flower Trend</h2>
          <p>"Sắc hoa tươi thắm - Gửi trọn yêu thương"</p>
          <Link to="/">Đặt ngay</Link>
        </div>
      </div>

      <div className="flower-gallery">
        <div className="g-4-8">
          <div>
            <Link to="/">
              <img src={cate1Img} alt='' />
            </Link>
          </div>
          <div>
            <div className='g-7-5'>
              <div>
                <Link>
                  <img src={cate2Img} alt='' />
                </Link>
              </div>
              <div>
                <Link>
                  <img src={cate3Img} alt='' />
                </Link>
              </div>
            </div>
            <div className='g-4-8'>
              <div>
                <Link>
                  <img src={cate4Img} alt='' />
                </Link>
              </div>
              <div>
                <Link>
                  <img src={cate5Img} alt='' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-products">
        <span className='section-title-1'>
          Wonderful gift
        </span>
        <h3 className='section-title-3'>
          Sản phẩm nổi bật
        </h3>
        <div className='container g-4-wrapper'>
          <div className='g-4'>
            <div className='g-4-img'>
              <img src={prod1Img} alt='' />
            </div>
            <div className='g-4-content'>
              <h4>
                <Link to="/">
                  Hoa cúc hồng
                </Link>
              </h4>
              <span className='price'>80.000 đ</span>
              <span className='price-old'>110.000 đ</span>
            </div>
          </div>

          <div className='g-4'>
            <div className='g-4-img'>
              <img src={prod2Img} alt='' />
            </div>
            <div className='g-4-content'>
              <h4>
                <Link to="/">
                  Hoa cúc hồng
                </Link>
              </h4>
              <span className='price'>80.000 đ</span>
              <span className='price-old'>110.000 đ</span>
            </div>
          </div>

          <div className='g-4'>
            <div className='g-4-img'>
              <img src={prod3Img} alt='' />
            </div>
            <div className='g-4-content'>
              <h4>
                <Link to="/">
                  Hoa cúc hồng
                </Link>
              </h4>
              <span className='price'>80.000 đ</span>
              <span className='price-old'>110.000 đ</span>
            </div>
          </div>

          <div className='g-4'>
            <div className='g-4-img'>
              <img src={prod4Img} alt='' />
            </div>
            <div className='g-4-content'>
              <h4>
                <Link to="/">
                  Hoa cúc hồng
                </Link>
              </h4>
              <span className='price'>80.000 đ</span>
              <span className='price-old'>110.000 đ</span>
            </div>
          </div>

          <div className='g-4'>
            <div className='g-4-img'>
              <img src={prod5Img} alt='' />
            </div>
            <div className='g-4-content'>
              <h4>
                <Link to="/">
                  Hoa cúc hồng
                </Link>
              </h4>
              <span className='price'>80.000 đ</span>
              <span className='price-old'>110.000 đ</span>
            </div>
          </div>

          <div className='g-4'>
            <div className='g-4-img'>
              <img src={prod6Img} alt='' />
            </div>
            <div className='g-4-content'>
              <h4>
                <Link to="/">
                  Hoa cúc hồng
                </Link>
              </h4>
              <span className='price'>80.000 đ</span>
              <span className='price-old'>110.000 đ</span>
            </div>
          </div>

          <div className='g-4'>
            <div className='g-4-img'>
              <img src={prod7Img} alt='' />
            </div>
            <div className='g-4-content'>
              <h4>
                <Link to="/">
                  Hoa cúc hồng
                </Link>
              </h4>
              <span className='price'>80.000 đ</span>
              <span className='price-old'>110.000 đ</span>
            </div>
          </div>

          <div className='g-4'>
            <div className='g-4-img'>
              <img src={prod8Img} alt='' />
            </div>
            <div className='g-4-content'>
              <h4>
                <Link to="/">
                  Hoa cúc hồng
                </Link>
              </h4>
              <span className='price'>80.000 đ</span>
              <span className='price-old'>110.000 đ</span>
            </div>
          </div>
        </div>
      </div>
      <div className="deal-of-the-day">
        <span className='section-title-1'>
          A little Story About Us
        </span>
        <h3 className='section-title-3'>
          Lịch sử của chúng tôi
        </h3>
        <p>
          <strong>
            Captain America: Civil War Christopher Markus and Stephen McFeely see the Hulk as the game over moment.
          </strong>
        </p>
        <p>
        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus. Phasellus eu rhoncus dolor, vitae scelerisque sapien
        </p>
      </div>
      <div className="about-us">

      </div>
      <div className="new-posts">

      </div>
      <div className="brands">
        
      </div>
    </div>
  );
}

export default Home;