import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PaymentSuccess = () => {
  const {code, orderId} = useParams();

  console.log(orderId);
  

  return (
    <div>
        <h2>Thanh toán thành công!</h2>
        <Link to="/order">Kiểm tra tình trạng đơn hàng</Link>
    </div>
  )
}

export default PaymentSuccess