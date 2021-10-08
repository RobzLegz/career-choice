import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import levelReducer from "../slices/levelSlice";

export const store = configureStore({
    reducer: {
        themes: themeReducer,
        levels: levelReducer,
    },
});