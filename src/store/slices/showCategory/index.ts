import { createSlice } from "@reduxjs/toolkit";

const showCategory = createSlice({
  name: "showcategory",
  initialState: {
    value: true,
  },
  reducers: {
    setShowCategory: (state) => {
      state.value = !state.value;
    },
    // increment: (state, param) => {
    //   console.log("PARAM", param.payload);
    //   console.log("ID", param.payload.id);
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const { setShowCategory } = showCategory.actions;
export const isShowCategory = (state: any) => state.showcategory.value;
export default showCategory.reducer;
