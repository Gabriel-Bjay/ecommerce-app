import React, { useContext, useEffect } from 'react';
import CartContext  from '../../context/CartContext';
import './Cart.css'

function Cart({ id, image, name, price,rating }) {
  const { cartItems,setCartItems, removeFromCart, increase, decrease } = useContext(CartContext);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [setCartItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const handleDecreaseQuantity = (item) =>{
    const { id, image, name, price,rating } = item
    decrease({ id, image, name, price,rating });
  }

  const handleIncreaseQuantity = (item) =>{
    const { id, image, name, price,rating } = item
    increase({ id, image, name, price,rating });
  }

  const handleRemoveFromCart = (item) =>{
    const { id, image, name, price,rating } = item
    removeFromCart({ id, image, name, price,rating });
    }

    const calculateTotalPrice = () => {
      const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return totalPrice.toFixed(2); // Round off to two decimal places
    };
  
  return (
    <>
    <h2 className='cart-header'>Cart</h2>
      <div className='cart-container'>
        {cartItems.length === 0 ? (
          <p className='cart-p'>Hello You Have Not Yet Added Any Items To Cart</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className='items-container'>
                <div >
                  <img src={item.image}
                    alt={item.name}
                    className='item-image'/>
                </div>
                <h4>{item.name}</h4>
                <p>Price :${item.price}</p>
                <p>Rating : {item.rating}</p>
                <div className='quantity'>
                  <button onClick={() => handleDecreaseQuantity(item)} className='btn'> - </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleIncreaseQuantity(item)} className='btn'> + </button>
                </div>
                {/* <p>Total : {item.total * item.quantity}</p> */}
                <button onClick={() => handleRemoveFromCart(item)}>Remove From Cart</button>
              </div>
              
            ))}
          </div>
        )}
      </div>  

      <div className='total-count'>
        <p>Total Items : {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
        <p>Total Price: {calculateTotalPrice()}</p>
      </div>
    </>
  );
}

export default Cart;

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



