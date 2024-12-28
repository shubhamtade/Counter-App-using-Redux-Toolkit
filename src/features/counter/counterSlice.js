import { createSlice } from "@reduxjs/toolkit";
import numWords from "num-words";

const initialState = {
  value: 0,
  inWord: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.inWord = numWords(state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      state.inWord = numWords(state.value);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
