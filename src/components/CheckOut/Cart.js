// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import CartContext from "../../context/CartContext";
// import "./CheckOut.css";
// import products from "../../products.json";

// const Cart = () => {
//   const navigate = useNavigate();
//   const cartContext = useContext(CartContext);
//   const { cartItems, removeFromCart, increase, decrease } = cartContext;

//   console.log("cartItems:", cartItems);
//   console.log("products:", products);

//   const handleRemoveItem = (id) => {
//     removeFromCart(id);
//   };

//   const handleIncreaseQuantity = (id) => {
//     increase(id);
//   };

//   const handleDecreaseQuantity = (id) => {
//     decrease(id);
//   };

//   const handleProceedToPayment = () => {
//     navigate("/payment");
//   };

//   return (
//     <div className="checkout-page">
//       <h2>Checkout</h2>
//       {cartItems.map((item) => {
//         const product = products.find((p) => p.name === item.productname);
  
//         if (!product) return null;
  
//         return (
//           <div key={item.productId} className="checkout-item">
//             <img src={product.image} alt={product.name} className="item-image" />
//             <div className="item-details">
//               <span className="item-name">{product.name}</span>
//               <div className="quantity-controls">
//                 <button onClick={() => handleDecreaseQuantity(item.productId)}> - </button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => handleIncreaseQuantity(item.productId)}> + </button>
//               </div>
//             </div>
//             console.log("item":item.productId)
//             <button className="remove-button" onClick={() => handleRemoveItem(item.productId)}>
//               Remove
//             </button>
//           </div>
//         );
//       })}
//       <button onClick={() => handleProceedToPayment()}>Proceed to Payment</button>
//     </div>
//   );
//     }  

// export default Cart;


import React, { useContext } from 'react';
import CartContext  from '../../context/CartContext';

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
            <img src={item.image} alt={item.name} />
              {item.name} - {item.price}
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
