import { createSlice } from "@reduxjs/toolkit";

// const initProduct:ProductInterface = {
//     id: string;
//     title?: string;
//     link?: string;
//     image?: string;
//     price?: string;
//     beforeDiscount?: string;
// }

const quickViewSlice = createSlice({
  name: "quickview",
  initialState: {
    isOpen: false,
  },
  reducers: {
    showQuickView: (state) => {
      state.isOpen = true;
    },
    closeQuickView: (state) => {
      state.isOpen = false;
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

export const { showQuickView, closeQuickView } = quickViewSlice.actions;
export const isOpenQuickView = (state: any) => state.quickview.isOpen;
export default quickViewSlice.reducer;
