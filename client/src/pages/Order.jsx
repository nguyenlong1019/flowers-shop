import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import {AuthContext} from '../context/authContext'


const Order = () => {
  const {currentUser} = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/orders/user/${currentUser.id}`);
        console.log(response.data);
        setOrders(response.data)
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='order-page container' style={{padding: '24px'}}>
      
      <h2>Your Orders</h2>
      
      {orders.map(order => (
        <div key={order.id} className="order" style={{borderTop: '1px solid #ccc'}}>
          <h3>Order ID: {order.id}</h3>
          <p>Recipient Name: {order.recipient_name}</p>
          <p>Total Price: {order.total_price.toLocaleString()} đ</p>
          <p>Shipping Address: {order.shipping_address}, {order.shipping_city}</p>
          <p>Status: {order.status}</p>
          <p>Payment Status: {order.payment_status}</p>

          <h4>Order Items:</h4>
          <ul>
            {order.order_items.map(item => (
              <li key={item.id}>
                <p>Flower ID: {item.flower_id}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price per item: {item.price.toLocaleString()} đ</p>
                <p>Total: {(item.price * item.quantity).toLocaleString()} đ</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>
  );
}

export default Order