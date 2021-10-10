import { createSlice } from "@reduxjs/toolkit";

interface Theme{
    name: string;
    info: string;
    stage: number;
    id: number;
    parent_id: null | number;
}

interface State {
    themes: Theme[],
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
                let filteredThemes: Theme[] = state.themes.filter((t: Theme) => t.id !== action.payload.id);
                state.themes.forEach((theme: Theme) => {
                    if(theme.name !== action.payload.name){
                        filteredThemes = [...filteredThemes, theme];
                    }
                });
                state.themes = filteredThemes;
            }else if(state.themes.length === 0){
                state.themes = [action.payload];
            }else if(!state.themes.some((t: Theme) => t.id === action.payload.id) && !state.themes.includes(action.payload)){
                state.themes = [...state.themes, action.payload];
            }else{
                let filteredThemes: Theme[] = state.themes.filter((t: Theme) => t.id !== action.payload.id);
                state.themes.forEach((theme: Theme) => {
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