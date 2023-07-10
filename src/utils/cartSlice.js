// Import necessary Redux dependencies
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  items: [],
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.name === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

// Export actions and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: {},
//     },
//     reducers: {
//         addItem : (state, action) => {
//             state.items[action.payload] = 1
//         },
//         removeItem : (state, action) => {
//             // for now, just remove it from last
//             if(state.items.hasOwnProperty(action.payload) == true) {
//                 delete state.items.action.payload
//             }
//         },
//         clearCart : (state) => {
//             state.items = {};
//         },
//     }
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;