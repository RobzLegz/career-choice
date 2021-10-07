import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";

export const store = configureStore({
    reducer: {
        themes: themeReducer,
    },
});