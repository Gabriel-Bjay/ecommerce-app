import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
  SAVE,
  SET_USER,
} from "./CartTypes.js";

export const sumItems = (cartItems) => {
  let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
  let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  return { itemCount, total };
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        const updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          ...sumItems(updatedCartItems),
          cartItems: updatedCartItems,
        };
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        return {
          ...state,
          ...sumItems([...state.cartItems, newItem]),
          cartItems: [...state.cartItems, newItem],
        };
      };
    
    case SAVE:
        const savedItem = action.payload;
        return {
          ...state,
          savedItems: [...state.savedItems, savedItem],
        };
    
    case SET_USER:
        return{
          ...state,
          user: action.payload,
        };    
        
    case REMOVE_ITEM:
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        ...sumItems(updatedCartItems),
        cartItems: updatedCartItems,
      };

    case INCREASE:
      const increasedCartItems = state.cartItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        ...sumItems(increasedCartItems),
        cartItems: increasedCartItems,
      };

    case DECREASE:
      const decreasedCartItems = state.cartItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return {
        ...state,
        ...sumItems(decreasedCartItems),
        cartItems: decreasedCartItems.filter(item => item.quantity > 0),
      };

    case CHECKOUT:
      return {
        ...state,
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    case CLEAR:
      return {
        ...state,
        cartItems: [],
        ...sumItems([]),
      };

    default:
      return state;
  }
};

export default CartReducer;
