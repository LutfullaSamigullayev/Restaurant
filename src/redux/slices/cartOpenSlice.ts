import { createSlice } from "@reduxjs/toolkit";

type CStateSlice = {
  isCartOpen: boolean;
};

const initialState: CStateSlice = {
  isCartOpen: false,
};

export const cartOpenSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggleCart: (state: CStateSlice) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { toggleCart } = cartOpenSlice.actions;
export default cartOpenSlice.reducer;
