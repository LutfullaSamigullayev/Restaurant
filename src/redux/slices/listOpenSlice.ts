import { createSlice } from "@reduxjs/toolkit";

type LStateSlice = {
  isListOpen: boolean;
};

const initialState: LStateSlice = {
  isListOpen: false,
};

export const listOpenSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggleList: (state: LStateSlice) => {
      state.isListOpen = !state.isListOpen;
    },
  },
});

export const { toggleList } = listOpenSlice.actions;
export default listOpenSlice.reducer;
