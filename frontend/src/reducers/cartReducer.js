import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      state.cart.push(item);
    },
    removeItem(state, action) {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item?.product?._id !== itemId);
    },
    clearCart(state) {
      state.cart = [];
    },
    updateItem(state, action) {
      const { quantity, product } = action.payload;
      const item = state.cart.find(
        (item) => item?.product?._id === product?._id
      );
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
