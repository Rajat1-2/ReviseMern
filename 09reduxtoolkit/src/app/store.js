import { configureStore } from "@reduxjs/toolkit";
// mainly store ko kuch pta nhi hota reducers ke baare me to hm use btatae
// h ki kon kon se reducers hjmne bnaye h
import todoReducer from '../features/todo/todoSlice';

// mainly ye function object hi lete h as input
export const store=configureStore({
    reducer: todoReducer,
}) 