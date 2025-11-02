import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ show, onHide }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onHide();
    navigate('/checkout');
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Shopping Cart</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <div className="text-center py-4">
                <i className="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                {cartItems.map(item => (
                  <div key={item.id} className="d-flex align-items-center border-bottom pb-3 mb-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={{width: '80px', height: '80px', objectFit: 'contain'}}
                      className="me-3"
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="text-success fw-bold mb-1">₹{item.price.toLocaleString()}</p>
                      <div className="d-flex align-items-center">
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
                
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <h5>Total: ₹{getCartTotal().toLocaleString()}</h5>
                  <button className="btn btn-danger" onClick={clearCart}>
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onHide}>
              Continue Shopping
            </button>
            {cartItems.length > 0 && (
              <button type="button" className="btn btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;