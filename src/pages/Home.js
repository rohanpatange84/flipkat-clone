import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterByCategory = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1>Great Indian Festival</h1>
          <p className="lead">Best deals on your favorite products</p>
          <button className="btn btn-warning btn-lg">Shop Now</button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mt-4">
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          <button className="btn btn-outline-primary" onClick={() => filterByCategory('all')}>
            All Products
          </button>
          <button className="btn btn-outline-primary" onClick={() => filterByCategory('Mobile')}>
            Mobiles
          </button>
          <button className="btn btn-outline-primary" onClick={() => filterByCategory('Laptop')}>
            Laptops
          </button>
          <button className="btn btn-outline-primary" onClick={() => filterByCategory('Headphones')}>
            Headphones
          </button>
        </div>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;