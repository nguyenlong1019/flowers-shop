import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <div>
        <h2>Đặt hàng thành công!</h2>
        <Link to="/order">Kiểm tra tình trạng đơn hàng</Link>
    </div>
  )
}

export default OrderSuccess