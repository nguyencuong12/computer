import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, param) => {
      console.log("PARAM", param.payload);
      console.log("ID", param.payload.id);
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state: any) => state.counter.value;
export default counterSlice.reducer;
