import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./CheckOut.css";
import products from '../../products.json'

const CheckOut = () => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { cartItems, removeFromCart, increase, decrease } = cartContext;

  console.log("cartItems:", cartItems);

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleIncreaseQuantity = (id) => {
    increase(id);
  };

  const handleDecreaseQuantity = (id) => {
    decrease(id);
  };

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <h2>Checkout</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cartItems.map((item) => {
        const product = products.find((p) => p.id === item.Id);
        // Ensure that product is found before accessing its properties
        if (!product) return null;

        return (
          <div key={item.id} className="checkout-item">
            <img src={product.image} alt={product.name} className="item-image" />
            <div className="item-details">
              <span className="item-name">{product.name}</span>
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.id)}> - </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}> + </button>
              </div>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button onClick={() => handleProceedToPayment()}>Proceed to Payment</button>
    </div>
  );
};
 

export default CheckOut;
