import { createSlice } from "@reduxjs/toolkit";
import data from '../Home/productInfo.json';

const initialState = {
  cart: [],
  cartItems: data,
  cartQuantity: 0,
  cartAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((cartItems) => cartItems.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let { cartQuantity, cartAmount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.cartAmount += itemTotal;
          cartTotal.cartQuantity += quantity;
          return cartTotal;
        },
        {
          cartQuantity: 0,
          cartAmount: 0,
        }
      );
      state.cartQuantity = cartQuantity;
      state.cartAmount = parseInt(cartAmount.toFixed(2));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((items) => items.id !== action.payload);
    },
  },
});


export const { addToCart, getCartTotal, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
