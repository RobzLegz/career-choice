import { createSlice } from "@reduxjs/toolkit";

export const levelSlice = createSlice({
    name: "level",
    initialState: {
        level: 1,
    },
    reducers: {
        incrementLevel: (state) => {
            state.level ++;
        },
        derementLevel: (state) => {
            state.level --;
        },
    },
});

export const { 
    incrementLevel,
    derementLevel
} = levelSlice.actions;

export const levelData = (state: any) => state.levels;

export default levelSlice.reducer;