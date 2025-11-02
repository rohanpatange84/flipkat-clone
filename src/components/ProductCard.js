import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="col-md-3 mb-4">
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <div className="card h-100 shadow-sm">
          <img 
            src={product.image} 
            className="card-img-top p-3" 
            alt={product.name}
            style={{height: '200px', objectFit: 'contain'}}
          />
          <div className="card-body d-flex flex-column">
            <h6 className="card-title text-dark">{product.name}</h6>
            <div className="mb-2">
              <span className="badge bg-warning text-dark">
                <i className="fas fa-star"></i> {product.rating}
              </span>
            </div>
            <p className="card-text text-success fw-bold mb-2">
              ₹{product.price.toLocaleString()}
            </p>
            <p className="card-text text-muted small flex-grow-1">
              {product.description}
            </p>
            <button 
              className="btn btn-primary btn-sm mt-auto"
              onClick={handleAddToCart}
            >
              <i className="fas fa-shopping-cart me-1"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;