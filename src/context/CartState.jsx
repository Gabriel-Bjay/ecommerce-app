  import { useReducer,useEffect } from "react";
  import CartContext from "./CartContext";
  import CartReducer from "./CartReducer";
  // import { sumItems } from "./CartReducer";

  const CartState = ({ children }) => {
    //   Initial State of the cart
    const initialState = {
      cartItems: [],
      checkout: false,
      savedItems: [],
    };

    //Set up the reducer
    const [state, dispatch] = useReducer(CartReducer, initialState);

    // Set Up CartItems
    const setCartItems = (cartItems) =>{
      dispatch({type:"SET_CART_ITEMS", payload: cartItems});
    }

    const setSavedItems = (savedItems) =>{
      dispatch({type: "SAVE_ITEMS", payload: savedItems,});
    }

    useEffect(() => {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        const parsedCartItems = JSON.parse(storedCartItems);
        dispatch({ type: "SET_CART_ITEMS", payload: parsedCartItems });
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }, [state.cartItems]);
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
          setCartItems,
          setSavedItems,
          addToCart,
          removeFromCart,
          increase,
          decrease,
          handleCheckout,
          clearCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  export default CartState;
