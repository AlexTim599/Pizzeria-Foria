import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, stateItems) => sum + stateItems.price, 0);
    // },
    addItem(state, action) {
      const finedItem = state.items.find((data) => data.id === action.payload.id);
      if (finedItem) {
        finedItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, stateItems) => {
        return stateItems.price * stateItems.count + sum;
      }, 0);
    },
    removeItems(state, action) {
      state.items = state.items.filter((data) => data.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem(state, action) {
      const finedItem = state.items.find((data) => data.id === action.payload);
      if (finedItem) {
        finedItem.count--;
      }
    },
  },
});

export const { addItem, removeItems, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
