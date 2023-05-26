// /src/Context/Cart/CartReducer.jsx

//Import the Action types
import {
    REMOVE_ITEM,
    ADD_TO_CART,
    INCREASE,
    DECREASE,
    CHECKOUT,
    CLEAR,
  } from "./CartTypes.js";
  
  // Export function to calculate the total price of the cart and the total quantity of the cart
  export const sumItems = (cartItems) => {
    // Remove the incorrect Storage function call
    // Storage(cartItems);
  
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total };
  };
  // The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
  const CartReducer = (state, action) => {
    // The switch statement is checking the type of action that is being passed in
    switch (action.type) {
      // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems,action.payload],
        };
  
      // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
      case REMOVE_ITEM:
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        const { itemCount, total } = sumItems(updatedCartItems);

        return {
          ...state,
          cartItems: updatedCartItems,
          itemCount,
          total,
        };

  
      // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
      case INCREASE:
  {
    const updatedCartItems = state.cartItems.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    return {
      ...state,
      ...sumItems(updatedCartItems),
      cartItems: updatedCartItems,
    };
  }

case DECREASE:
  {
    const updatedCartItems = state.cartItems.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    return {
      ...state,
      ...sumItems(updatedCartItems),
      cartItems: updatedCartItems,
    };
  }


        case 'LOAD_CART_ITEMS':
          return {
            ...state,
            cartItems: action.payload,
          };  
  
      // If the action type is CHECKOUT, we want to clear the cartItems array and set the checkout to true
      case CHECKOUT:
        return {
          cartItems: [],
          checkout: true,
          ...sumItems([]),
        };
  
      //If the action type is CLEAR, we want to clear the cartItems array
      case CLEAR:
        return {
          cartItems: [],
          ...sumItems([]),
        };
  
      //Return the state if the action type is not found
      default:
        return state;
    }
  };
  
  export default CartReducer;
  