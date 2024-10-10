import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="single-footer">
        <div className="footer-logo">
          <img src="" alt="" />
        </div>
        <p></p>
        <div className='socials'>

        </div>
      </div>
      <div className="single-footer">
        <h2>Information</h2>
        <ul>
          <li>
            <a href="#">Out Company</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Why We?</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div className="single-footer">
        <h2>Quicklink</h2>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="Contact"></a>
          </li>
        </ul>
      </div>
      <div className="single-footer">
        <h2>Support</h2>
        <ul>
          <li>
            <a href="#">Online Support</a>
          </li>
          <li>
            <a href="#">Shipping Policy</a>
          </li>
          <li>
            <a href="#">Return Policy</a>
          </li>
          <li>
            <a href="#">Pricacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
      <div className="single-footer">
        <h2>See Information</h2>
        <div>
          <address>
            123, ABC, Road ##, Main City, Your address goes here.
            <br />
            Phone: 01234 567 890
            <br />
            Email: https://example.com
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;