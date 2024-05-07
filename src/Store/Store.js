import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../app/TodoReducer";

export const Store = configureStore({
    reducer: TodoReducer
})