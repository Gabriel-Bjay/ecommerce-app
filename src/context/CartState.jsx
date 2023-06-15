  import { useReducer } from "react";
  import CartContext from "./CartContext";
  import CartReducer from "./CartReducer";
  // import { sumItems } from "./CartReducer";

  const CartState = ({ children }) => {
    //   Initial State of the cart
    const initialState = {
      cartItems: [],
      checkout: false,
      user:"",
      savedItems: [],
    };

    //Set up the reducer
    const [state, dispatch] = useReducer(CartReducer, initialState);

    // Set Up CartItems
    const setCartItems = (cartItems) =>{
      dispatch({type:"SET_CART_ITEMS", payload: cartItems});
    }

    const setSavedItems = (product) =>{
      dispatch({type: "SAVE", payload: product,});
    }

    
    //Function to handle when an item is added from the store into the Cart
    const addToCart = (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    };

    //Function to handle when an item that is in the cart is added again
    const increase = (payload) => {
      dispatch({ type: "INCREASE", payload });
    };

    //Function to handle when an item is removed from the cart
    const decrease = (payload) => {
      dispatch({ type: "DECREASE", payload });
    };

    //Function to remove an item from the cart
    const removeFromCart = (payload) => {
      dispatch({ type: "REMOVE_ITEM", payload });
    };

    //Function to clear the cart
    const clearCart = () => {
      dispatch({ type: "CLEAR" });
    };

    const setUser = (user) => {
      console.log("User payload", user);
      dispatch({
        type: "SET_USER",
        payload: user,
      });
    };

    //Function to handle when the user clicks the checkout button
    const handleCheckout = () => {
      dispatch({ type: "CHECKOUT" });
    };
    // Calculate the total quantity and total price using sumItems
    // const { totalQuantity, totalPrice } = sumItems(state.cartItems);

    return (
      //Add the functions that have been defined above into the Context provider, and pass on to the children
      <CartContext.Provider
        value={{
          showCart: state.showCart,
          cartItems: state.cartItems,
          savedItems:state.savedItems,
          user: state.user,
          setCartItems,
          setSavedItems,
          addToCart,
          removeFromCart,
          increase,
          decrease,
          handleCheckout,
          clearCart,
          setUser,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  export default CartState;
