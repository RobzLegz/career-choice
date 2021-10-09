import { createSlice } from "@reduxjs/toolkit";

export const levelSlice = createSlice({
    name: "level",
    initialState: {
        stage: 1,
    },
    reducers: {
        incrementLevel: (state) => {
            if(state.stage < 6){
                state.stage += 1;
            }
        },
        decrementLevel: (state) => {
            if(state.stage > 1){
                state.stage -= 1;
            }
        },
    },
});

export const { 
    incrementLevel,
    decrementLevel
} = levelSlice.actions;

export const levelData = (state: any) => state.levels;

export default levelSlice.reducer;