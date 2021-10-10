import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import levelReducer from "../slices/levelSlice";
import languageReducer from "../slices/languageSlice";

export const store = configureStore({
    reducer: {
        themes: themeReducer,
        levels: levelReducer,
        language: languageReducer,
    },
});