import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"

// giá trị các phần price và user_id cần xem lại nên là kiểu dạng số hay string 
const UpdateOrder = () => {
  const {orderId} = useParams();
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState({
    user_id: '',
    total_price: '',
    shipping_address: '',
    shipping_city: '',
    shipping_postal_code: '',
    shipping_phone: '',
    shipping_status: 'not shipped',
    status: 'pending',
    payment_method: 'COD', // Thêm payment_method
    payment_status: 'unpaid', // Thêm payment_status
  });
  
  const [orderItems, setOrderItems] = useState([{flower_id: '', quantity: 1, price: ''}]);
  const [flowers, setFlowers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users').then(response => setUsers(response.data));
    axios.get('/flowers').then(response => setFlowers(response.data));

    if (orderId) {
      axios.get(`/orders/${orderId}`).then(response => {
        const order = response.data;
        console.log(order);
        
        setOrderData({
          user_id: order.user_id,
          total_price: order.total_price,
          shipping_address: order.shipping_address,
          shipping_city: order.shipping_city,
          shipping_postal_code: order.shipping_postal_code,
          shipping_phone: order.shipping_phone,
          shipping_status: order.shipping_status,
          status: order.status,
          payment_method: order.payment_method, // Thêm payment_method
          payment_status: order.payment_status, // Thêm payment_status
        });
        setOrderItems(order.order_items); // Lưu các mục đơn hàng
      });
    }
  }, [orderId]);

  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...orderItems];

    // Nếu người dùng thay đổi sản phẩm (`flower_id`)
    if (name === 'flower_id') {
      const selectedFlower = flowers.find(flower => flower.id === parseInt(value));
      if (selectedFlower) {
        updatedItems[index] = {
          ...updatedItems[index],
          flower_id: selectedFlower.id,
          price: selectedFlower.price, // Cập nhật giá dựa trên sản phẩm được chọn
          quantity: updatedItems[index].quantity || 1, // Đặt số lượng mặc định là 1 nếu chưa có
        };
      }
    } else {
      updatedItems[index] = { ...updatedItems[index], [name]: value };
    }

    setOrderItems(updatedItems);
  };

  const addItem = () => {
    setOrderItems([...orderItems, { flower_id: '', quantity: 1, price: '' }]);
  };

  const removeItem = (index) => {
    const updatedItems = [...orderItems];
    updatedItems.splice(index, 1);
    setOrderItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    const total = orderItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setOrderData({ ...orderData, total_price: total.toFixed(0) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderPayload = {
      ...orderData,
      items: orderItems,
    };

    try {
      if (orderId) {
        // Cập nhật đơn hàng
        await axios.put(`/orders/${orderId}`, orderPayload);
      } else {
        // Tạo mới đơn hàng
        await axios.post('/orders', orderPayload);
      }
      navigate('/admin/orders');
    } catch (err) {
      console.error(err);
      alert('Error saving order.');
    }
  };

  return (
    <div className="order-form">
      <h2>{orderId ? 'Cập nhật Đơn hàng' : 'Tạo Đơn hàng mới'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User</label>
          <select name="user_id" value={orderData.user_id} onChange={handleOrderChange} required>
            <option value="">Chọn người dùng</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Địa chỉ giao hàng</label>
          <input
            type="text"
            name="shipping_address"
            value={orderData.shipping_address}
            onChange={handleOrderChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Thành phố</label>
          <input
            type="text"
            name="shipping_city"
            value={orderData.shipping_city}
            onChange={handleOrderChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mã bưu điện</label>
          <input
            type="text"
            name="shipping_postal_code"
            value={orderData.shipping_postal_code}
            onChange={handleOrderChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            type="text"
            name="shipping_phone"
            value={orderData.shipping_phone}
            onChange={handleOrderChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Trạng thái giao hàng</label>
          <select name="shipping_status" value={orderData.shipping_status} onChange={handleOrderChange}>
            <option value="not shipped">Not Shipped</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>

        <div className="form-group">
          <label>Trạng thái đơn hàng</label>
          <select name="status" value={orderData.status} onChange={handleOrderChange}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>

        <div className="form-group">
          <label>Phương thức thanh toán</label>
          <select name="payment_method" value={orderData.payment_method} onChange={handleOrderChange}>
            <option value="COD">COD</option>
            <option value="internet_banking">Internet Banking</option>
          </select>
        </div>

        <div className="form-group">
          <label>Trạng thái thanh toán</label>
          <select name="payment_status" value={orderData.payment_status} onChange={handleOrderChange}>
            <option value="unpaid">Unpaid</option>
            <option value="paid">Paid</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <h3>Các mục đơn hàng</h3>
        <p className="order-item-title">
          <span>Sản phẩm</span>
          <span>Số lượng</span>
          <span>Giá trên 1 sp</span>
        </p>

        {orderItems.map((item, index) => (
          <div key={index} className="order-item">
            <select
              name="flower_id"
              value={item.flower_id}
              onChange={(e) => handleItemChange(index, e)}
              required
            >
              <option value="">Chọn sản phẩm</option>
              {flowers.map(flower => (
                <option key={flower.id} value={flower.id}>
                  {flower.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, e)}
              placeholder="Số lượng"
              required
            />
            <input
              type="number"
              name="price"
              value={item.price}
              onChange={(e) => handleItemChange(index, e)}
              placeholder="Giá"
              readOnly // Đặt là readOnly để chỉ cho phép giá tự động
              required
            />
            <button type="button" onClick={() => removeItem(index)}>Xóa</button>
          </div>
        ))}

        <button type="button" className='add-order-item-btn' onClick={addItem}>Thêm mục</button>

        <div className="form-group">
          <label>Tổng giá</label>
          <input type="number" value={orderData.total_price} readOnly />
          <button type="button" onClick={calculateTotalPrice}>Tính tổng giá</button>
        </div>

        <button className='btn-save' style={{marginBottom: '24px'}} type="submit">{orderId ? 'Cập nhật Đơn hàng' : 'Tạo Đơn hàng mới'}</button>
      </form>
    </div>
  )
}

export default UpdateOrder