import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({ product, handleAddToCart }) => {
    // console.log(props);
    // const { handleAddToCart } = props
    const { name, img, price } = product

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-details'>
                <p className='product-name' >{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => { handleAddToCart(product) }} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;