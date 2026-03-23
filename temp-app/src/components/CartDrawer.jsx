import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CartDrawer.css';

const IconClose = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const IconTrash = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>;

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={closeCart}></div>
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>Your Cart ({cartItems.length})</h2>
          <button className="btn-close-cart" onClick={closeCart} aria-label="Close Cart">
            <IconClose />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart-msg">
              <p>Your cart is empty.</p>
              <button 
                className="btn btn-outline empty-shop-btn"
                onClick={() => {
                  closeCart();
                  navigate('/shop');
                }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <p className="cart-item-price">${item.price}</p>
                  
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="btn-remove-item" onClick={() => removeFromCart(item.id)}>
                      <IconTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Subtotal</span>
              <span className="total-amount">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="taxes-note">Taxes and shipping calculated at checkout</p>
            <button className="btn btn-primary btn-checkout">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
