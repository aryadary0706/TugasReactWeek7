import { useState, useEffect } from 'react';
import './App.css';
import ProductList from "./Component/ProductList/ProductList.jsx";

function ProductDetail() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);

    const processedProduct = products
        .map(product => ({
            ...product,
            price: product.price * 0.2
        }))
        .filter(product => product.rating.rate > 4.0);

    return (
        <ProductList products={processedProduct} />
    );
}

function App() {
    return (
        <div className='app'>
            <h1>Fakestore Products</h1>
            <ProductDetail />
        </div>
    );
}

export default App;
