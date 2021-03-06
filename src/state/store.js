import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // el logger es un middleware que usamos para ver cosas en consola
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});

export default store;
