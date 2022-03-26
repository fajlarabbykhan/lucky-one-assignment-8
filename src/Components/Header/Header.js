import React from 'react';
import logo from '../images/shoe.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header-nav'>
            <img src={logo} alt="" />
            <div>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Orders</a>
                <a href="#">About</a>
            </div>
        </div>
    );
};

export default Header;