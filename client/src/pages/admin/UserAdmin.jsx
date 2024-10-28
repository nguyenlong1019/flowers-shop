import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const UserAdmin = () => {
  const [users, setUsers] = useState([]); // state lưu trữ tất cả thông tin người dùng
  const [filteredUsers, setFilteredUsers] = useState([]); // state để lưu người dùng sau khi filter
  const [searchTerm, setSearchTerm] = useState(''); // state để lưu từ khóa tìm kiếm 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/users`);
        setUsers(res.data);
        setFilteredUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = users.filter(user => 
      user.username.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  }

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/users/${userId}`);
      const updatedUsers = users.filter(user => user.id !== userId);
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers.filter(user => 
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } catch (err) {
      console.error(err);
    }
  }

  // console.log(filteredUsers);

  return (
    <div className='user-manager-page'>
      <h3 className='admin-title'>Quản lý người dùng</h3>
      <div className="search-section">
        <form action="" method='GET' onSubmit={(e) => e.preventDefault()}>
          <div className="search-group">
            <input type="text" name="search" id="" value={searchTerm} onChange={handleSearch} placeholder='Tìm kiếm người dùng' required/>
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
              <th>Tên tài khoản</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{textAlign: 'center'}}>
            {filteredUsers.map((user, index) => (
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

export default UserAdmin
