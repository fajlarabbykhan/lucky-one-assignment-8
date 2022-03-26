import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
    const { name, img, price } = props.product
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-details'>
                <p className='product-name' >{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};

export default Product;