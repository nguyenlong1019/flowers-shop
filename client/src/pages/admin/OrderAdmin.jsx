import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const OrderAdmin = () => {
  const [orders, setOrders] = useState([]); 
  const [filteredOrders, setFilteredOrders] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); // state để lưu từ khóa tìm kiếm 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/orders`);
        console.log(res.data);
        
        setOrders(res.data);
        setFilteredOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = orders.filter(order => 
      order.user_name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredOrders(filtered);
  }

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`/orders/${orderId}`);
      const updatedOrders = orders.filter(order => order.id !== orderId);
      setOrders(updatedOrders);
      setFilteredOrders(updatedOrders.filter(order => 
        order.user_name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } catch (err) {
      console.error(err);
    }
  }

  // console.log(filteredUsers);

  return (
    <div className='user-manager-page'>
      <h3 className='admin-title'>Quản lý đơn hàng</h3>
      <div className="search-section">
        <form action="" method='GET' onSubmit={(e) => e.preventDefault()}>
          <div className="search-group">
            <input type="text" name="search" id="" value={searchTerm} onChange={handleSearch} placeholder='Tìm kiếm đơn hàng' required/>
            <button type='submit'>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <Link to="/admin/orders/add" className='btn-add-object'>+ <i className="fa-solid fa-cart-shopping"></i></Link>
      </div>
      <div className="t-data" style={{height: '75vh', overflowY: 'auto'}}>
        <table className='table table-hover'>
          <thead style={{textAlign: 'center'}}>
            <tr>
              <th>STT</th>
              <th>Mã đơn</th>
              <th>Người đặt</th>
              <th>Trạng thái</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{textAlign: 'center'}}>
            {filteredOrders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.id}</td>
                <td>{order.user_name}</td>
                <td>{order.status}</td>
                <td>
                  <Link to={`/admin/orders/edit/${order.id}`} className='btn-edit-object'>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <Link className='btn-del-object' onClick={() => handleDelete(order.id)}>
                    <i class="fa-solid fa-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderAdmin;
