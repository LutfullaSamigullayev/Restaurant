import { cartOpenSlice } from "./slices/cartOpenSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { listOpenSlice } from "./slices/listOpenSlice";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whiteList: [],
  blackList: ["cart", "list"],
};

const combinedReducers = combineReducers({
  cart: cartOpenSlice.reducer,
  list: listOpenSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
