import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    displayName: null,
    firstName: null,
    lastName: null,
    email: null,
    token: null,
    uid: null,

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.displayName = action.payload.displayName,
            state.firstName = action.payload.firstName,
            state.lastName = action.payload.lastName,
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.uid = action.payload.uid;
        },
        removeUser(state) {
            state.displayName = null,
            state.firstName = null,
            state.lastName = null,
            state.email = null;
            state.token = null;
            state.uid = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;