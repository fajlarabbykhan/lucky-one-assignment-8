import React from 'react';
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className='cart'>
            <h4>Cart Details</h4>
            <div>

                {
                    cart.map((cart) =>
                        <li>
                            <img src={cart.img} alt="" />
                            <p>{cart.name}</p>
                            <button className='btn'>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>

                    )

                }
                <p><button className='btn-last'>Chose One For Me</button></p>
                <p><button className='btn-last'>Clear</button></p>
            </div>

        </div>
    );
};

export default Cart;