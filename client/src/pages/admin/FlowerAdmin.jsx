import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const FlowerAdmin = () => {
  const [flowers, setFlowers] = useState([]); 
  const [filteredFlowers, setFilteredFlowers] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/flowers`);
        setFlowers(res.data);
        setFilteredFlowers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = flowers.filter(flower => 
      flower.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFlowers(filtered);
  }

  const handleDelete = async (flowerId) => {
    try {
      await axios.delete(`/flowers/${flowerId}`);
      const updatedFlowers = flowers.filter(flower => flower.id !== flowerId);
      setFlowers(updatedFlowers);
      setFilteredFlowers(updatedFlowers.filter(flower => 
        flower.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } catch (err) {
      console.error(err);
    }
  }

  // console.log(filteredUsers);

  return (
    <div className='user-manager-page'>
      <h3 className='admin-title'>Quản lý sản phẩm (hoa)</h3>
      <div className="search-section">
        <form action="" method='GET' onSubmit={(e) => e.preventDefault()}>
          <div className="search-group">
            <input type="text" name="search" id="" value={searchTerm} onChange={handleSearch} placeholder='Tìm kiếm hoa' required/>
            <button type='submit'>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <Link to="/admin/flowers/add" className='btn-add-object'>+ <i class="fa-solid fa-leaf"></i></Link>
      </div>
      <div className="t-data" style={{height: '75vh', overflowY: 'auto'}}>
        <table className='table table-hover'>
          <thead style={{textAlign: 'center'}}>
            <tr>
              <th>STT</th>
              <th>Tên loài hoa</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Ảnh</th>
              <th>SP Nổi bật</th>
              <th>SP Sale</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{textAlign: 'center'}}>
            {filteredFlowers.map((flower, index) => (
              <tr key={flower.id}>
                <td>{index + 1}</td>
                <td>{flower.name}</td>
                <td>{flower.category}</td>
                <td>{flower.price}</td>
                <td>{flower.image.url}</td>
                <td>{flower.is_feature}</td>
                <td>{flower.is_sale}</td>
                <td>
                  <Link to={`/admin/flowers/edit/${flower.id}`} className='btn-edit-object'>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <Link className='btn-del-object' onClick={() => handleDelete(flower.id)}>
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

export default FlowerAdmin;
