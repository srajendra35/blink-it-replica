import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    AddCart(state, action) {
      const newItemId = action.payload.id;
      const existingItem = state.find((item) => item.id === newItemId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push(action.payload);
      }
    },

    RemoveCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    incrementItem(state, action) {
      state.map((item) => {
        if (item.id == action.payload) {
          item.quantity++;
        }
        return item;
      });
    },

    decrementItem(state, action) {
      state
        .map((item) => {
          if (item.id == action.payload) {
            item.quantity--;
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
  },
});

export const { AddCart, RemoveCart, incrementItem, decrementItem } =
  counterSlice.actions;

export default counterSlice.reducer;
