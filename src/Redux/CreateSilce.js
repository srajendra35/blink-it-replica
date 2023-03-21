import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    AddCart(state, action) {
      state.push(action.payload);
    },

    RemoveCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    IncrementItem(state ,action) {
      state.push(action.payload);
    },

    decrementItem(state,action) {
       state.pop(action.payload);
    },
  },
});

export const {AddCart,RemoveCart,IncrementItem,decrementItem} =
  counterSlice.actions;

export default counterSlice.reducer;
