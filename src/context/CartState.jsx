  // import { useReducer } from "react";
  // import CartContext from "./CartContext";
  // import CartReducer from "./CartReducer";
  // // import { sumItems } from "./CartReducer";

  // const CartState = ({ children }) => {
  //   //   Initial State of the cart
  //   const initialState = {
  //     cartItems: [],
  //     checkout: false,
  //   };

  //   //Set up the reducer
  //   const [state, dispatch] = useReducer(CartReducer, initialState);

  //   //Function to handle when an item is added from the store into the Cart
  //   const addToCart = (payload) => {
  //     dispatch({ type: "ADD_TO_CART", payload });
  //   };

  //   //Function to handle when an item that is in the cart is added again
  //   const increase = (payload) => {
  //     dispatch({ type: "INCREASE", payload });
  //   };

  //   //Function to handle when an item is removed from the cart
  //   const decrease = (payload) => {
  //     dispatch({ type: "DECREASE", payload });
  //   };

  //   //Function to remove an item from the cart
  //   const removeFromCart = (payload) => {
  //     dispatch({ type: "REMOVE_ITEM", payload });
  //   };

  //   //Function to clear the cart
  //   const clearCart = () => {
  //     dispatch({ type: "CLEAR" });
  //   };

  //   //Function to handle when the user clicks the checkout button
  //   const handleCheckout = () => {
  //     dispatch({ type: "CHECKOUT" });
  //   };
  //   // Calculate the total quantity and total price using sumItems
  //   // const { totalQuantity, totalPrice } = sumItems(state.cartItems);

  //   return (
  //     //Add the functions that have been defined above into the Context provider, and pass on to the children
  //     <CartContext.Provider
  //       value={{
  //         showCart: state.showCart,
  //         cartItems: state.cartItems,
  //         addToCart,
  //         removeFromCart,
  //         increase,
  //         decrease,
  //         handleCheckout,
  //         clearCart,
  //       }}
  //     >
  //       {children}
  //     </CartContext.Provider>
  //   );
  // };

  // export default CartState;


  // CartContext.js
import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.productId !== itemId));
  };

  const increase = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increase, decrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
