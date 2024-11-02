import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import prod1Img from '../images/product/1.jpg';
import prod2Img from '../images/product/2.jpg';
import prod3Img from '../images/product/3.jpg';
import prod4Img from '../images/product/4.jpg';
import prod5Img from '../images/product/5.jpg';

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {...item, quantity: Math.max(quantity, 1)};
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

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

        {cart.map(item => (
          <div className="row cart-item">
              <div className="col col-2">
              <div className="cart-product-img">
                  <img src={`../upload/${item.image}`} alt={item.name} />
              </div>
              </div>
              <div className="col col-2">
              <p className="cart-product-name">
                  {item.name}
              </p>
              </div>
              <div className="col col-2">
              <p className="cart-product-price">
                  {(item.price * 1).toLocaleString()} đ
              </p>
              </div>
              <div className="col col-2">
              <p className="cart-product-qty">
                <div className='group-qty'>
                  <button className="dec qtybutton" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} className="cart-plus-minus-box" />
                  <button className="inc qtybutton" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </p>
              </div>
              <div className="col col-2">
              <p className="cart-product-total">
                  {(item.price * item.quantity).toLocaleString()} đ
              </p>
              </div>
              <div className="col col-2">
              <button onClick={() => removeItem(item.id)} className="cart-product-actions">
                  <i class="fa-solid fa-trash"></i>
              </button>
              </div>
          </div>
        ))}


        

        <div className="row cart-total">
            <div className="col col-10" style={{textAlign: "right"}}>
                <p className="total-price">Total price: {calculateTotal().toLocaleString()} đ</p>
            </div>
            <div className="col col-2">
                <button className="btn update-cart-btn">Update cart</button>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="cart-checkout">
          <h3 style={{padding: "27px 15px 25px"}}>Cart Totals</h3>
          <div style={{padding: "15px 20px"}} className="cart-total-info">
              <h4 className="cart-subtitle">
                  Sub Total 
              </h4>
              <span className="cart-price">
                  {calculateTotal().toLocaleString()} đ
              </span>
          </div>

          <div style={{padding: "15px 20px"}} className="cart-total-info">
              <h4 className="cart-subtitle">
                  Shipping 
              </h4>
              <span className="cart-price">
                  30,000 đ
              </span>
          </div>

          <div style={{padding: "15px 20px"}} className="cart-total-info">
              <h4 className="cart-subtitle">
                  Total 
              </h4>
              <span className="cart-price">
                  {(calculateTotal() + 30000).toLocaleString()} đ
              </span>
          </div>

          <div className="cart-total-info">
              <Link to="/checkout" className="btn btn-process-checkout">
                  Proceed To Checkout
              </Link>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Cart