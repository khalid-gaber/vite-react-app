import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { users } from "../../interfaces";

const initialState: users = {
    loading: false,
    data: [],
    error: ""
}

type fetchUsersRequestActions = PayloadAction<undefined>;
type fetchUsersSuccessActions = PayloadAction<users["data"]>;
type fetchUsersFailureActions = PayloadAction<users["error"]>;
export type actions = fetchUsersRequestActions | fetchUsersSuccessActions | fetchUsersFailureActions;


const fetchUsersSlice = createSlice({
    name: "fetchUsers",
    initialState,
    reducers: {
        fetchUsersRequest: usersState=>{
            usersState.loading = true
        },
        fetchUsersSuccess: (usersState, action: fetchUsersSuccessActions)=>{
            usersState.loading = false;
            usersState.data = action.payload
        },
        fetchUsersFailure: (usersState, action: fetchUsersFailureActions)=>{
            usersState.loading = false;
            usersState.error = action.payload
        }
    }
})
//  const {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} = fetchUsersSlice.actions
export const fetchUsers = () => (dispatch: Dispatch<actions>) => {
    dispatch(fetchUsersSlice.actions.fetchUsersRequest());
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(fetchUsersSlice.actions.fetchUsersSuccess(json)))
    .catch(err => dispatch(fetchUsersSlice.actions.fetchUsersFailure(err.message)))
}

export default fetchUsersSlice.reducer;