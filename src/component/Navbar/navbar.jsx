import React from 'react';
import './navStyle.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <div className='container-fluid'>
      <div className="topnav">
        <a><img className='logo' src={logo} alt="Logo"></img></a>
        <a className="active" href="#home">Headphones</a>
        <a href="#news">Artist</a>
        <a href="#contact">Community</a>
        <a href="#about">Sustainability</a>
        <a href="#about">Story</a>
        <a href="#about">Support</a>
        <div className="right">
          <a href="#about">Cart
            <img className='cart' src={cart} alt="Logo"></img>
          </a>
        </div>
      </div>

    </div>
  );
}

export default NavigationBar;


