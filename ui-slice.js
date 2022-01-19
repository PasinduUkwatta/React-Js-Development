import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisibale: false },
  reducers: {
    toggle(state) {
      state.cartIsVisibale = !state.cartIsVisibale;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
