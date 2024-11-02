import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const PaymentSuccess = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const orderId = queryParams.get('orderId');

  console.log(code);
  console.log(orderId);
  localStorage.removeItem('cart');
  
  return (
    <div>
        {code === '00' 
        ? (
          <>
            <h2>Thanh toán thành công!</h2>
            <Link to="/order">Kiểm tra tình trạng đơn hàng</Link>
          </>
        ) 
        : (
          <>
            <h2>Đặt hàng thành công!</h2>
            <p>Thanh toán không thành công!</p>
            <Link to="/order">Kiểm tra tình trạng đơn hàng</Link>
          </>
        )}
        
    </div>
  )
}

export default PaymentSuccess