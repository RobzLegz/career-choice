import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import levelReducer from "../slices/levelSlice";
import adminReducer from "../slices/adminSlice";

export const store = configureStore({
    reducer: {
        themes: themeReducer,
        levels: levelReducer,
        admin: adminReducer
    },
});