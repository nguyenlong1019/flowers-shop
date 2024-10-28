import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoryAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCat, setFilteredCat] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/categories');
        setCategories(res.data);
        setFilteredCat(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = categories.filter(category => 
      category.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCat(filtered);
  }

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`/categories/${categoryId}`);
      const updatedCategories = categories.filter(category => category.id !== categoryId);
      setCategories(updatedCategories);
      setFilteredCat(updatedCategories.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } catch (err) {
      console.error(err);
    }
  }
 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }


  return (
    <div className='user-manager-page'>
      <h3 className='admin-title'>Quản lý người dùng</h3>
      <div className="search-section">
        <form action="" method='GET' onSubmit={(e) => e.preventDefault()}>
          <div className="search-group">
            <input type="text" name="search" id="" value={searchTerm} onChange={handleSearch} placeholder='Tìm kiếm danh mục' required/>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <Link to="/admin/categories/add" className='btn-add-object'>+ <i class="fa-solid fa-table-cells-large"></i></Link>
      </div>
      <div className="t-data" style={{height: '75vh', overflowY: 'auto'}}>
        <table className='table table-hover'>
          <thead style={{textAlign: 'center'}}>
            <tr>
              <th>STT</th>
              <th>Tên danh mục</th>
              <th>Thời điểm tạo</th>
              <th>Thời điểm cập nhật</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{textAlign: 'center'}}>
            {filteredCat.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>{formatDate(category.created_at)}</td>
                <td>{formatDate(category.updated_at)}</td>
                <td>
                  <Link to={`/admin/categories/edit/${category.id}`} className='btn-edit-object'>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <Link className='btn-del-object' onClick={() => handleDelete(category.id)}>
                    <i class="fa-solid fa-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryAdmin;
