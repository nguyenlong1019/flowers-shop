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
        setUsers(res);
        setFilteredUsers(res);
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
            <tr>
              <td>1</td>
              <td>admin</td>
              <td>admin@gmail.com</td>
              <td></td>
              <td>
                <Link>
                  <i class="fa-solid fa-pen-to-square"></i>
                </Link>
                <Link>
                  <i class="fa-solid fa-trash"></i>
                </Link>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>admin</td>
              <td>admin@gmail.com</td>
              <td></td>
              <td>
                <Link>
                  <i class="fa-solid fa-pen-to-square"></i>
                </Link>
                <Link>
                  <i class="fa-solid fa-trash"></i>
                </Link>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>admin</td>
              <td>admin@gmail.com</td>
              <td></td>
              <td>
                <Link>
                  <i class="fa-solid fa-pen-to-square"></i>
                </Link>
                <Link>
                  <i class="fa-solid fa-trash"></i>
                </Link>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>admin</td>
              <td>admin@gmail.com</td>
              <td></td>
              <td>
                <Link>
                  <i class="fa-solid fa-pen-to-square"></i>
                </Link>
                <Link>
                  <i class="fa-solid fa-trash"></i>
                </Link>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>admin</td>
              <td>admin@gmail.com</td>
              <td></td>
              <td>
                <Link>
                  <i class="fa-solid fa-pen-to-square"></i>
                </Link>
                <Link>
                  <i class="fa-solid fa-trash"></i>
                </Link>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserAdmin
