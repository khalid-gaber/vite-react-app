import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { inputs } from "../../interfaces";

const initialState: inputs = {
    firstName: "",
    lastName: "",
    age: ""
}

const formResultSlice = createSlice({
    name: 'inputs',
    initialState,
    reducers: {
        setResult: (state, action: PayloadAction<typeof initialState>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.age = action.payload.age;
        },
        resetResult: (state) => {
            state.firstName = initialState.firstName;
            state.lastName = initialState.lastName;
            state.age = initialState.age;
        }
    }
})

export const {setResult, resetResult} = formResultSlice.actions;
export default formResultSlice.reducer;