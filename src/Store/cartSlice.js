import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.beer.price * newItem.quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          beer: newItem.beer,
          quantity: newItem.quantity,
          priceActual: newItem.beer.price * newItem.quantity,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.priceActual += newItem.beer.price * newItem.quantity;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.totalPrice -= existingItem.beer.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
        existingItem.priceActual = existingItem.priceActual - existingItem.beer.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;