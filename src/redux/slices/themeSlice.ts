import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        themes: null,
    },
    reducers: {
        setThemes: (state, action) => {
            state.themes = action.payload;
        },
    },
});

export const { 
    setThemes,
} = themeSlice.actions;

export const themeData = (state: any) => state.themes;

export default themeSlice.reducer;