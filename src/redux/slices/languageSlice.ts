import { createSlice } from "@reduxjs/toolkit";
import { languages, supportedLanguages } from "../../data/languages";

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        text: languages.latvian,
    },
    reducers: {
        changeLanguage: (state, action) => {
            if(supportedLanguages.some(l => l.short === action.payload)){
                if(action.payload === "LV"){
                    state.text = languages.latvian;
                }
            }
        }
    },
});

export const { 
    changeLanguage
} = languageSlice.actions;

export const languageData = (state: any) => state.language;

export default languageSlice.reducer;