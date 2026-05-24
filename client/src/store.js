import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
