import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        loggedIn: false,
    },
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },
    },
});

export const { 
    login
} = adminSlice.actions;

export const adminData = (state: any) => state.admin;

export default adminSlice.reducer;