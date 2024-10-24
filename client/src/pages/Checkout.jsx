import React from 'react';

const Checkout = () => {
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

        </div>

        <div className="checkout-order">
          <h3 className="checkout-title">
            Your Order
          </h3>

          

        </div>
      </div>


    </div>
  );
}

export default Checkout;
