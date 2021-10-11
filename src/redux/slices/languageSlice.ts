import { createSlice } from "@reduxjs/toolkit";
import { languages, supportedLanguages } from "../../data/languages";

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        text: languages.latvian,
        lang: "LV"
    },
    reducers: {
        changeLanguage: (state, action) => {
            if(supportedLanguages.some(l => l.short === action.payload)){
                if(action.payload === "LV"){
                    state.text = languages.latvian;
                    state.lang = "LV";
                }else if(action.payload === "EN"){
                    state.text = languages.english;
                    state.lang = "EN";
                }else if(action.payload === "RU"){
                    state.text = languages.russian;
                    state.lang = "RU";
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