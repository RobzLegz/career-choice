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
                state.themes.filter(t => t !== action.payload)
            }
        },
    },
});

export const { 
    addTheme,
} = themeSlice.actions;

export const themeData = (state: any) => state.themes;

export default themeSlice.reducer;