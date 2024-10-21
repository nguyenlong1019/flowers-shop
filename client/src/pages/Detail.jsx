import React from 'react'
import { Link } from 'react-router-dom';

import prod1Img from '../images/product/1.jpg';
import prod2Img from '../images/product/2.jpg';
import prod3Img from '../images/product/3.jpg';
import prod4Img from '../images/product/4.jpg';
import prod5Img from '../images/product/5.jpg';

const Detail = () => {
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
          <img src={prod5Img} alt="" />
        </div>
        <div className="product-info">
          <h2 className="product-title">
            Hoa hồng
          </h2>
          <p>
            <span className="price">80,000 đ</span>
            <span className='price-old'>110,000 đ</span>
          </p>
          <p className='sku'>SKU: 12345</p>
          <p className="desc">
            I must explain to you how all this mistaken idea of  
            denouncing pleasure and praising pain was born and I will 
            give you a complete account of the system, and expound the 
            actual teachings of the great explorer of the truth, the 
            master-builder of human happiness.
          </p>
          <div className="quantity">
            <div className="card-plus-minus">
              <button className="dec qtybutton">
              <i class="fa-solid fa-minus"></i>
              </button>
              <input type="text" value="0" className="cart-plus-minus-box" />
              <button className="inc qtybutton">
              <i class="fa-solid fa-plus"></i>
              </button>
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

      </div>

      <div className="featured-products">
        <span className='section-title-1'>
          The Most Trendy
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
        </div>
      </div>
    </div>
  )
}

export default Detail