import React, { useState } from 'react';

const Checkout = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='checkout-page'>
      
      <div className="breadcrumb">
        <div className="container">
          <h3 className="title-3">
            Checkout
          </h3>
          <p><span>Trang chủ</span><span><i class="fa-solid fa-angle-right"></i></span><span>Thanh toán</span></p>
        </div>
      </div>

      <div className="checkout-detail-info">
        <div className="checkout-billing">
          <h3 className="checkout-title">
            Billing details
          </h3>
          <div className="form-group">
            <label htmlFor="">Địa chỉ giao hàng *</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Thành phố *</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Postal Code *</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Số điện thoại *</label>
            <input type="text" required />
          </div>
        </div>

        <div className="checkout-order" style={{backgroundColor: '#f8f8f8', padding: '24px'}}>
          <h3 className="checkout-title">
            Your Order
          </h3>
          <div style={{padding: '24px'}}>
            <div className="row" style={{paddingTop: '16px', paddingBottom: '16px', borderTop: '1px solid #ddd'}}>
              <div className="col col-6" style={{textAlign: 'center'}}>PRODUCT</div>
              <div className="col col-6" style={{textAlign: 'center'}}>TOTAL</div>
            </div>
            {cart.map(item => (
              <>
                <div className="row" style={{borderTop: '1px solid #ddd', padding: '12px 0'}}>
                  <div className="col col-6">{item.name} x {item.quantity}</div>
                  <div className="col col-6" style={{textAlign: 'center'}}>{(item.price * item.quantity).toLocaleString()} đ</div>
                </div>
              </>
            ))}
          </div>
          
          <div className="form-group">
            <label htmlFor="">Hình thức thanh toán</label>
            <select style={{width: 'max-content'}} name="payment-type" id="payment-type">
              <option style={{width: 'max-content'}} value="cod">Thanh toán khi nhận hàng</option>
              <option style={{width: 'max-content'}} value="internet_banking">VNPay</option>
            </select>
          </div>
          <button className='btn-checkout' type='submit' onClick={() => console.log("Clicked!")}>Process Checkout</button>
        </div>
      </div>


    </div>
  );
}

export default Checkout;
