import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    message: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (product.stock === 0) {
        state.message = "Product is unavailable";
        return;
      }

      if (existingItem) {
        if (existingItem.quantity + 1 > product.stock) {
          state.message = "Cannot add more than available stock";
          return;
        }
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      state.message = "Product added to cart";
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity < item.stock) {
        item.quantity += 1;
        state.message = "";
      } else {
        state.message = "Maximum stock reached";
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearMessage: (state) => {
      state.message = "";
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearMessage,
} = cartSlice.actions;

export default cartSlice.reducer;