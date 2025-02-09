import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, ProductItem } from '@/types';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cartItems') as string) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}: PayloadAction<ProductItem>) => {
      state.items = [...state.items, {...payload, quantity: 1}]
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    increment: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.map(item => item.id === payload ? {...item, quantity: item.quantity + 1} : item)
    },
    decrement: (state, { payload }: PayloadAction<number>) => {
      const quentity = state.items.filter(item => item.id === payload)[0].quantity
      if(quentity === 1) {
        state.items = state.items.filter(item => item.id !== payload)
      } else
      state.items = state.items.map(item => item.id === payload ? {...item, quantity: item.quantity - 1} : item)
    },
    removeToCart: (state, {payload}: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== payload)
    }, 
  },
});

export const { addToCart, increment, decrement, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
