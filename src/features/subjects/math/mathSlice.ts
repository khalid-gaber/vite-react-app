import { createSlice } from "@reduxjs/toolkit";
import { subjects } from "../../../interfaces";

const initialState: subjects = {act: 5}

const mathSlice = createSlice({
    name: "sub/math",
    initialState,
    reducers: {
        bonus: state => {state.act++},
        minus: state => {state.act--}
    }
})

export const {bonus, minus} = mathSlice.actions;
export default mathSlice.reducer; 