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
              On the other hand, we denounce with righteous 
              indignation and dislike men who are so beguiled 
              and demoralized by the charms of pleasure of the 
              moment, so blinded by desire, that they cannot 
              foresee the pain and trouble that are bound to 
              ensue; and equal blame belongs to those who fail 
              in their duty through weakness of will, which is 
              the same as saying through shrinking from toil 
              and pain. These cases are perfectly simple and 
              easy to distinguish. In a free hour, when our 
              power of choice is untrammelled and when nothing 
              prevents our being able to do what we like best, 
              every pleasure is to be welcomed and every pain 
              avoided. But in certain circumstances and owing 
              to the claims of duty or the obligations of 
              business it will frequently occur that pleasures 
              have to be repudiated and annoyances accepted. 
              The wise man therefore always holds in these 
              matters to this principle of selection: he 
              rejects pleasures to secure other greater 
              pleasures, or else he endures pains to avoid 
              worse pains.
            </p>
            <p>
              Et harum quidem rerum facilis est et expedita 
              distinctio. Nam libero tempore, cum soluta nobis 
              est eligendi optio cumque nihil impedit quo minus 
              id quod maxime placeat facere possimus, omnis 
              voluptas assumenda est, omnis dolor repellendus. 
              Temporibus autem quibusdam et aut officiis 
              debitis aut rerum necessitatibus saepe eveniet ut 
              et voluptates repudiandae sint et molestiae non 
              recusandae. Itaque earum rerum hic tenetur a 
              sapiente delectus, ut aut reiciendis voluptatibus 
              maiores alias consequatur aut perferendis 
              doloribus asperiores repellat.
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