import React, { useState, useEffect } from 'react';

import ProductCard from './ProductCard.js';
import { listProducts } from './ProductsService';

const ProductsIndex = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await listProducts();
            setProducts(data);
        })()
    }, [])

    if (products === null) {
        return <div>Loading...</div>
    } else {
        return <div>{products.map(item => <ProductCard product={item} key={item.id} />)}</div>
    }
}

export default ProductsIndex;
