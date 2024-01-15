import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./slices/counter";
import quickViewSliceReducer from "./slices/quickViewProduct";
import showCategory from "./slices/showCategory";
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSliceReducer,
      quickview: quickViewSliceReducer,
      showcategory: showCategory,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
