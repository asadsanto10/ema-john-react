import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="single-product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <div className="product-header">
                    <h3>{name}</h3>
                    <p><small>by: </small>{seller}</p>
                </div>
                <div className="product-info">
                    <div>
                        <p>${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button onClick={() => props.handelProduct(props.product)} className="add-cart"> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Product;