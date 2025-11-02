import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';
import Cart from './Cart';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
        <div className="container">
          <Link className="navbar-brand text-white fw-bold" to="/">
            <i className="fab fa-flipkart me-2"></i>
            Flipkart
          </Link>
          
          <SearchBar />
          
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-outline-light position-relative me-3"
              onClick={() => setShowCart(true)}
            >
              <i className="fas fa-shopping-cart"></i>
              Cart
              {getCartItemsCount() > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
            
            <button className="btn btn-outline-light me-2">
              Login
            </button>
            
            <button className="btn btn-outline-light">
              <i className="fas fa-user"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Categories Bar */}
      <div className="bg-light py-2 border-bottom">
        <div className="container">
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary btn-sm">Electronics</button>
            <button className="btn btn-outline-primary btn-sm">Fashion</button>
            <button className="btn btn-outline-primary btn-sm">Home</button>
            <button className="btn btn-outline-primary btn-sm">Beauty</button>
            <button className="btn btn-outline-primary btn-sm">Sports</button>
            <button className="btn btn-outline-primary btn-sm">Books</button>
          </div>
        </div>
      </div>

      <Cart show={showCart} onHide={() => setShowCart(false)} />
    </>
  );
};

export default Header;