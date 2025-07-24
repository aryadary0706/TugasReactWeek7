import React from 'react'
import ProductCard from "../ProductCard/ProductCard.jsx";

export default function ProductList({products}) {
    return (
        <div className='product-list'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

        </div>
    )
}
