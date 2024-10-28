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
      order.username.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredOrders(filtered);
  }

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`/orders/${orderId}`);
      const updatedOrders = orders.filter(order => order.id !== orderId);
      setOrders(updatedOrders);
      setFilteredOrders(updatedOrders.filter(order => 
        order.username.toLowerCase().includes(searchTerm.toLowerCase())
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
        <Link to="/admin/users/add" className='btn-add-object'>+ <i class="fa-solid fa-user"></i></Link>
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
            {filteredOrders.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Link to={`/admin/users/edit/${user.id}`} className='btn-edit-object'>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <Link className='btn-del-object' onClick={() => handleDelete(user.id)}>
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
