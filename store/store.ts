
import { configureStore } from "@reduxjs/toolkit";

// import { applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
// import thunk from "redux-thunk"; 

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development mode
  }, 
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
