import React from 'react'

function ProductCard({product}) {
    return (
        <div className="productCard">
            <img src={product.image}  alt={product.name} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating.rate}</p>
            <button className="buy-button">Buy</button>
        </div>
    )
}

export default ProductCard
