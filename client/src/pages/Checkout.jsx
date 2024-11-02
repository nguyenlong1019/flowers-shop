import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../context/authContext'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [billingInfo, setBillingInfo] = useState({
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    paymentType: 'COD'
  });

  const [paymentData, setPaymentData] = useState({
    'orderId': '',
    'amount': 0,
    'bankCode': 'VNBANK',
    'language': 'vn'
  });

  // amount: 
  // bankCode: value = 'VNBANK'
  // language: value = 'vn'

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 30000);
    setPaymentData(prevData => ({ ...prevData, amount: totalPrice }));
    return totalPrice;
  };

  const handleChange = (e) => {
    setBillingInfo({...billingInfo, [e.target.name]: e.target.value});
  };

  const handleCheckout = async () => {
    console.log("Clicked!");
    
    const {address, city, postalCode, phone, paymentType} = billingInfo;

    if (!address || !city || !postalCode || !phone) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const orderData = {
      user_id: currentUser.id,
      total_price: calculateTotal(),
      shipping_address: address, 
      shipping_city: city,
      shipping_postal_code: postalCode,
      shipping_phone: phone,
      payment_method: paymentType,
      payment_status: paymentType === 'internet_banking' ? 'paid' : 'unpaid' ,
      shipping_status: 'not shipped',
      status: 'pending',
      items: cart,
    };

    try {
      const orderRes = await axios.post('/orders', orderData);
      const orderId = orderRes.data.orderId;
      setPaymentData(prevData => ({
          ...prevData,
          orderId: orderId,
      }));
      console.log(orderRes);
      
      if (paymentType === 'internet_banking') {
        const res = await axios.post('/payment/create_payment_url', paymentData);
        // console.log(res);
        window.location.href = res.data;
      } else {
        alert("Đặt hàng thành công với phương thức COD!");
        localStorage.removeItem('cart');
        navigate('/order-success'); // Điều hướng tới trang thành công
      }
      
    } catch (err) {
      console.error("Lối khi đặt hàng: ", err);
      alert("Đặt hàng không thành công, vui lòng thử lại!");
    }

   }

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
            <input value={billingInfo.address} name='address' onChange={handleChange} type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Thành phố *</label>
            <input value={billingInfo.city} name='city' onChange={handleChange} type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Postal Code *</label>
            <input value={billingInfo.postalCode} name='postalCode' onChange={handleChange} type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Số điện thoại *</label>
            <input value={billingInfo.phone} name='phone' onChange={handleChange} type="text" required />
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
              <div key={item.id} className="row" style={{borderTop: '1px solid #ddd', padding: '12px 0'}}>
                <div className="col col-6">{item.name} x {item.quantity}</div>
                <div className="col col-6" style={{textAlign: 'center'}}>{(item.price * item.quantity).toLocaleString()} đ</div>
              </div>
            ))}
            <div className="row" style={{borderTop: '1px solid #ddd', padding: '12px 0'}}>
              <div className="col col-6">Phí vận chuyển</div>
              <div className="col col-6" style={{textAlign: 'center'}}>30,000 đ</div>
            </div>
            <div className="row" style={{borderTop: '1px solid #ddd', padding: '12px 0'}}>
              <div className="col col-6">Tổng</div>
              <div className="col col-6" style={{textAlign: 'center', fontWeight: '700'}}></div>
            </div>

          </div>
          
          <div className="form-group">
            <label htmlFor="">Hình thức thanh toán</label>
            <select style={{width: 'max-content'}} name="paymentType" value={billingInfo.paymentType} onChange={handleChange} id="paymentType">
              <option style={{width: 'max-content'}} value="COD">Thanh toán khi nhận hàng</option>
              <option style={{width: 'max-content'}} value="internet_banking">VNPay</option>
            </select>
          </div>
          <button className='btn-checkout' type='submit' onClick={handleCheckout} >Process Checkout</button>
        </div>
      </div>


    </div>
  );
}

export default Checkout;
