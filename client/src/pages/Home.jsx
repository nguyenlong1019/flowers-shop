import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <div className='home container'>
      <div className="home-intro">
        <div className="intro-content">
          <h3>Top Trending</h3>
          <h2>2024 Flower Trend</h2>
          <p>"Sắc hoa tươi thắm - Gửi trọn yêu thương"</p>
          <Link to="/">Đặt ngay</Link>
        </div>
      </div>

      <div className="flower-gallery">

      </div>
      <div className="featured-products">

      </div>
      <div className="deal-of-the-day">

      </div>
      <div className="about-us">

      </div>
      <div className="new-posts">

      </div>
      <div className="brands">
        
      </div>
    </div>
  );
}

export default Home;