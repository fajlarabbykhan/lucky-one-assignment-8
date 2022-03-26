import React from 'react';
import './cart.css'
const Cart = ({ cart }) => {
    return (
        <div>
            <h4>Cart Details</h4>
            <p>length: {cart.length}</p>
        </div>
    );
};

export default Cart;