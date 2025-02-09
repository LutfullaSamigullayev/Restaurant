import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './Slices/menuSlice';
import cartReducer from './Slices/cartSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;