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
            if(state.themes.length === 0){
                state.themes.push(action.payload);
            }else if(state.themes.some(t => t.name !== action.payload.name)){
                state.themes.push(action.payload);
            }else{
                for (let i = state.themes.length - 1; i >= 0; i--) {
                    if (state.themes[i].name === action.payload.name) {
                        state.themes.splice(i, 1);
                    }
                }
            }
        },
    },
});

export const { 
    addTheme,
} = themeSlice.actions;

export const themeData = (state: any) => state.themes;

export default themeSlice.reducer;