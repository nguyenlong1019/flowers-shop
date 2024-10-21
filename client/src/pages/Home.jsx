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

import banner1Img from '../images/banner/1-1.jpg';
import banner2Img from '../images/banner/1-2.jpg';
import banner3Img from '../images/banner/1-3.jpg';

import avatar1Img from '../images/testimonial/testimonial1.jpg';
import avatar2Img from '../images/testimonial/testimonial2.jpg';

import blog1Img from '../images/blog/blog1.jpg';
import blog2Img from '../images/blog/blog2.jpg';
import blog3Img from '../images/blog/blog3.jpg';

import brand1Img from '../images/brand/1.png';
import brand2Img from '../images/brand/2.png';
import brand3Img from '../images/brand/3.png';
import brand4Img from '../images/brand/4.png';
import brand5Img from '../images/brand/5.png';


const Home = () => {
  return (
    <div className='home container-fluid'>
      <div className="home-intro">
        <div className="intro-content">
          <h3 className='title-slide'>Top Trending</h3>
          <h2>2024 Flower Trend</h2>
          <p>"Sắc hoa tươi thắm - Gửi trọn yêu thương"</p>
          <Link className='btn flosun-btn' to="/">Đặt ngay</Link>
        </div>
      </div>

      <div className="flower-gallery">
        <div className="g-4-8">
          <div className='g-4'>
            <Link to="/">
              <img src={cate1Img} alt='' />
            </Link>
          </div>
          <div className='g-8'>
            <div className='g-7-5'>
              <div className='g-7'>
                <Link>
                  <img src={cate2Img} alt='' />
                </Link>
              </div>
              <div className='g-5'>
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
        <h3 className='section-title-3'>Deal of the day</h3>
        <div className="g-3-wrapper container">
          <div className="g-3">
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
          </div>
          <div className="g-3">
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
          </div>
          <div className="g-3">
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
          </div>
        </div>
      </div>

      <div className="about-us">
        <span className='section-title-1'>
          A little Story About Us
        </span>
        <h3 className='section-title-3'>
          Lịch sử của chúng tôi
        </h3>
        <p className='container'>
          <strong>
            Captain America: Civil War Christopher Markus and Stephen McFeely see the Hulk as the game over moment.
          </strong>
        </p>
        <p className='container about-desc'>
        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus. Phasellus eu rhoncus dolor, vitae scelerisque sapien
        </p>
        <div className="g-3-wrapper container">
          <div className="g-3">
            <div className="g-3-img">
              <img src={banner1Img} alt="" />
            </div>
          </div>
          <div className="g-3">
            <div className="g-3-img">
              <img src={banner2Img} alt="" />
            </div>
          </div>
          <div className="g-3">
            <div className="g-3-img">
              <img src={banner3Img} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <span className="section-title-1">
          We Love Our Clients
        </span>
        <h3 className="section-title-3">
          What They’re Saying
        </h3>
        <div className="g-3-wrapper container">
          <div className="g-3">
            <div className="g-3-avatar">
              <img src={avatar1Img} alt="" />
            </div>
            <p className="g-3-review">
              "These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!"
            </p>
            <span className='author'><strong>Katherine Sullivan </strong> - Customer</span>
          </div>
          <div className="g-3">
            <div className="g-3-avatar">
              <img src={avatar2Img} alt="" />
            </div>
            <p className="g-3-review">
              "These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!"
            </p>
            <span className='author'><strong>Katherine Sullivan </strong> - Customer</span>
          </div>
          <div className="g-3">
            <div className="g-3-avatar">
              <img src={avatar1Img} alt="" />
            </div>
            <p className="g-3-review">
              "These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!"
            </p>
            <span className='author'><strong>Katherine Sullivan </strong> - Customer</span>
          </div>
        </div>
      </div>

      <div className="new-posts">
          <span className="section-title-1">From The Blogs</span>
          <h3 className="section-title-3">
            Our Latest Posts
          </h3>
          <div className="g-3-wrapper container">
            <div className="g-3">
              <div className="new-img">
                <img src={blog1Img} alt="" />
              </div>
              <div className="new-content">
                <h4>
                  <Link>Standard blog post One</Link>
                </h4>
                <span className="new-author">By Admin - December 18, 2024</span>
                <p className='new-desc'>Lorem ipsu dolor sit amet cons elits cumque adipisicing, sed do incid eiusmod tempor ut labore et dolore eveniet .</p>
                <Link className='btn read-more-btn'>Đọc thêm</Link>
              </div>
            </div>

            <div className="g-3">
              <div className="new-img">
                <img src={blog2Img} alt="" />
              </div>
              <div className="new-content">
                <h4>
                  <Link>Standard blog post One</Link>
                </h4>
                <span className="new-author">By Admin - December 18, 2024</span>
                <p className='new-desc'>Lorem ipsu dolor sit amet cons elits cumque adipisicing, sed do incid eiusmod tempor ut labore et dolore eveniet .</p>
                <Link className='btn read-more-btn'>Đọc thêm</Link>
              </div>
            </div>

            <div className="g-3">
              <div className="new-img">
                <img src={blog3Img} alt="" />
              </div>
              <div className="new-content">
                <h4>
                  <Link>Standard blog post One</Link>
                </h4>
                <span className="new-author">By Admin - December 18, 2024</span>
                <p className='new-desc'>Lorem ipsu dolor sit amet cons elits cumque adipisicing, sed do incid eiusmod tempor ut labore et dolore eveniet .</p>
                <Link className='btn read-more-btn'>Đọc thêm</Link>
              </div>
            </div>
          </div>
      </div>
      <div className="brands">
        <div className="brands-list container">
          <Link className='brand-link'>
            <img src={brand1Img} alt="" />
          </Link>
          <Link className='brand-link'>
            <img src={brand2Img} alt="" />
          </Link>
          <Link className='brand-link'>
            <img src={brand3Img} alt="" />
          </Link>
          <Link className='brand-link'>
            <img src={brand4Img} alt="" />
          </Link>
          <Link className='brand-link'>
            <img src={brand5Img} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;