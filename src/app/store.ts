import {  configureStore } from "@reduxjs/toolkit";
import mathSlice from "../features/subjects/math/mathSlice";
import englishSlice from "../features/subjects/english/englishSlice";
import fetchUsersSlice from "../features/users/users"
import formResult from "../features/formResult/formResult";

const store = configureStore({
    reducer: {
        math: mathSlice,
        english: englishSlice,
        users: fetchUsersSlice,
        formResult: formResult
    }
})

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;