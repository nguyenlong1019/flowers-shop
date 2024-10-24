import React from 'react'
import { Link } from 'react-router-dom'

const UserAdmin = () => {
  return (
    <div className='user-manager-page'>
      <h3>Quản lý người dùng</h3>
      <form action="">
        <div className="search-group">
          <input type="text" name="search" id="" placeholder='Tìm kiếm người dùng' required/>
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
      <div className="t-data">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên tài khoản</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>admin</td>
              <td>admin@gmail.com</td>
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
