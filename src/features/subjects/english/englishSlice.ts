import { createSlice } from "@reduxjs/toolkit";
import { subjects } from "../../../interfaces";

const initialState: subjects = {act: 5}

const englishSlice = createSlice({
    name: "sub/english",
    initialState,
    reducers: {
        bonus: state => {state.act++},
        minus: state => {state.act--}
    }
})

export const {bonus, minus} = englishSlice.actions;
export default englishSlice.reducer;