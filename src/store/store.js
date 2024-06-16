import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/auth/authSlice";
import addressReducer from "./features/address/addressSlice";
import singleProductReducer from "./features/singleProduct/singleProductSlice";
import orderReducer from "./features/order/orderSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    auth: authReducer,
    address: addressReducer,
    order: orderReducer,
  },
});
