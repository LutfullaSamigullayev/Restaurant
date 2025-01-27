import { MenuState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MenuState = {
  selectedKey: localStorage.getItem('selectedMenuKey') || 'all',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSelectedKey(state, action: PayloadAction<string>) {
      state.selectedKey = action.payload;
      localStorage.setItem('selectedMenuKey', action.payload);
    },
  },
});

export const { setSelectedKey } = menuSlice.actions;
export default menuSlice.reducer;