import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const totalPrice = cart.reduce( (total, prd) => total + prd.price, 0 );
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 15.78;
    }
    else if (total > 15) {
        shipping = 5.55;
    }
    else if (total > 0) {
        shipping = 12.33;
    }

    const tax = total /10;
    const formateNumber = num => {
        const prec = num.toFixed(2);
        return Number(prec);
    }
    return (
        <div>
            <h3>Itenm Summery</h3>
            <h4>Item Orderd: {cart.length}</h4>
            <p>Product Price: ${formateNumber(total)}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax: ${formateNumber(tax)}</p>
            <p>Total Price: ${formateNumber(tax + total + shipping)}</p>
        </div>
    );
};

export default Cart;