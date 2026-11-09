import { configureStore, type EnhancedStore } from "@reduxjs/toolkit";
import helloReducer from "./helloReducer";
import counterReducer from "./counterReducer";
import addReducer from "./addReducer";
import todosReducer from "./todosReducer";

// elements call one of these with useSelector to get the wrapped object member
// and useDispatch to get the methods declared in ::reducers 
// which are then called as dispatch(method())
export const store: EnhancedStore = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;