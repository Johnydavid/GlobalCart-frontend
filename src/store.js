import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";
import thunk from "redux-thunk";

const reducer = combineReducers({
  productsState: productsReducer,
  productState: productReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
