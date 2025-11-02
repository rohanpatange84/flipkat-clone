import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h2>Product not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert('Product added to cart!');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.image} 
            alt={product.name}
            className="img-fluid rounded"
            style={{maxHeight: '500px', objectFit: 'contain'}}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <div className="mb-3">
            <span className="badge bg-warning text-dark me-2">
              <i className="fas fa-star"></i> {product.rating}
            </span>
            <span className="text-muted">1,234 Ratings</span>
          </div>
          
          <h3 className="text-success mb-4">₹{product.price.toLocaleString()}</h3>
          
          <div className="mb-4">
            <h5>Description</h5>
            <p>{product.description}</p>
          </div>

          <div className="mb-4">
            <h5>Specifications</h5>
            <ul className="list-unstyled">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <label className="form-label">Quantity:</label>
            <div className="d-flex align-items-center">
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="mx-3">{quantity}</span>
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="d-flex gap-3">
            <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
              <i className="fas fa-shopping-cart me-2"></i>
              Add to Cart
            </button>
            <button className="btn btn-warning btn-lg" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;