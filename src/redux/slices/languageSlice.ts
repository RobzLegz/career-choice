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
                }else if(action.payload === "EN"){
                    state.text = languages.english;
                }else if(action.payload === "RU"){
                    state.text = languages.russian;
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