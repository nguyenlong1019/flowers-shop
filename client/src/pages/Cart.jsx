import React from 'react';
import { Link } from 'react-router-dom';

import prod1Img from '../images/product/1.jpg';
import prod2Img from '../images/product/2.jpg';
import prod3Img from '../images/product/3.jpg';
import prod4Img from '../images/product/4.jpg';
import prod5Img from '../images/product/5.jpg';

const Cart = () => {
  return (
    <div className='cart-page'>
      <div className="breadcrumb">
        <div className="container">
          <h3 className="title-3">
            Shopping Cart
          </h3>
          <p><span>Trang chủ</span><span><i class="fa-solid fa-angle-right"></i></span><span>Giỏ hàng</span></p>
        </div>
      </div>
      <div className="container">
        <div className="row cart-header">
            <div className="col col-2">Image</div>
            <div className="col col-2">Product</div>
            <div className="col col-2">Price</div>
            <div className="col col-2">Quantity</div>
            <div className="col col-2">Total</div>
            <div className="col col-2">Remove</div>
        </div>

        <div className="row cart-item">
            <div className="col col-2">
            <div className="cart-product-img">
                <img src={prod1Img} alt="" />
            </div>
            </div>
            <div className="col col-2">
            <p className="cart-product-name">
                Hoa hồng đỏ
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-price">
                80,000 đ
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-qty">
              <div className='group-qty'>
                <button className="dec qtybutton">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input type="text" value="0" className="cart-plus-minus-box" />
                <button className="inc qtybutton">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-total">
                800,000 đ
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-actions">
                <i class="fa-solid fa-trash"></i>
            </p>
            </div>
        </div>

        <div className="row cart-item">
            <div className="col col-2">
            <div className="cart-product-img">
                <img src={prod2Img} alt="" />
            </div>
            </div>
            <div className="col col-2">
            <p className="cart-product-name">
                Hoa hồng đỏ
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-price">
                80,000 đ
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-qty">
              <div className='group-qty'>
                <button className="dec qtybutton">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input type="text" value="0" className="cart-plus-minus-box" />
                <button className="inc qtybutton">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-total">
                800,000 đ
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-actions">
                <i class="fa-solid fa-trash"></i>
            </p>
            </div>
        </div>

        <div className="row cart-item">
            <div className="col col-2">
            <div className="cart-product-img">
                <img src={prod3Img} alt="" />
            </div>
            </div>
            <div className="col col-2">
            <p className="cart-product-name">
                Hoa hồng đỏ
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-price">
                80,000 đ
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-qty">
              <div className='group-qty'>
                <button className="dec qtybutton">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input type="text" value="0" className="cart-plus-minus-box" />
                <button className="inc qtybutton">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-total">
                800,000 đ
            </p>
            </div>
            <div className="col col-2">
            <p className="cart-product-actions">
                <i class="fa-solid fa-trash"></i>
            </p>
            </div>
        </div>

      <div className="row cart-total">
            <div className="col col-10" style={{textAlign: "right"}}>
                <p className="total-price">Total price: 2,000,000 đ</p>
            </div>
            <div className="col col-2">
                <button className="btn update-cart-btn">Update cart</button>
            </div>
        </div>
      </div>

      <div className="cart-checkout">
        <h3>Cart Totals</h3>
        <div className="cart-total-info">
            <h4 className="cart-subtitle">
                Sub Total 
            </h4>
            <span className="cart-price">
                2,000,000 đ
            </span>
        </div>

        <div className="cart-total-info">
            <h4 className="cart-subtitle">
                Shipping 
            </h4>
            <span className="cart-price">
                100,000 đ
            </span>
        </div>

        <div className="cart-total-info">
            <h4 className="cart-subtitle">
                Total 
            </h4>
            <span className="cart-price">
                2,100,000 đ
            </span>
        </div>

        <div className="cart-total-info">
            <button className="btn btn-process-checkout">
                Proceed To Checkout
            </button>
        </div>
      </div>


    </div>
  );
}

export default Cart