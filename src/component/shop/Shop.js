import React, { useState } from 'react';
import fackeData from '../../fakeData';
const Shop = () => {
    const first10 = fackeData.slice(0, 10);
    const [products, setProducts] = useState(first10)

    return (
        <div>
            <h3>{products.length}</h3>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;