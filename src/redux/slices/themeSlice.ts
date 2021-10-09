import { createSlice } from "@reduxjs/toolkit";

interface State {
    themes: any[],
}

const initialState: State = {
    themes: []
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        addTheme: (state, action) => {
            if(state.themes.includes(action.payload)){
                let filteredThemes: any[] = state.themes.filter(t => t.name !== action.payload.name);
                state.themes.forEach(theme => {
                    if(theme.name !== action.payload.name){
                        filteredThemes = [...filteredThemes, theme];
                    }
                });
                state.themes = filteredThemes;
            }else if(state.themes.length === 0){
                state.themes = [action.payload];
            }else if(!state.themes.some(t => t.name === action.payload.name) && !state.themes.includes(action.payload)){
                state.themes = [...state.themes, action.payload];
            }else{
                let filteredThemes: any[] = state.themes.filter(t => t.name !== action.payload.name);
                state.themes.forEach(theme => {
                    if(theme.name !== action.payload.name){
                        filteredThemes = [...filteredThemes, theme];
                    }
                });
                state.themes = filteredThemes;
            }
        },
    },
});

export const { 
    addTheme,
} = themeSlice.actions;

export const themeData = (state: any) => state.themes;

export default themeSlice.reducer;