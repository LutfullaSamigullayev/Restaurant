import { createSlice } from "@reduxjs/toolkit";

type TStateSlice = {
  isCartOpen: boolean;
};

const initialState: TStateSlice = {
  isCartOpen: false,
};

export const cartOpenSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggleCart: (state: TStateSlice) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { toggleCart } = cartOpenSlice.actions;
export default cartOpenSlice.reducer;
