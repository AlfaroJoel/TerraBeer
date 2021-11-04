import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity += newItem.quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          beer: newItem.beer,
          quantity: newItem.quantity,
          totalPrice: newItem.beer.price * newItem.quantity,
        });
        console.log(newItem);
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.beer.price * newItem.quantity;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.find(item => item !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.beer.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;