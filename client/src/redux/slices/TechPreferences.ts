import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface TechPreferences {
    fullstack: number;
    data: number;
    devops: number;
    duty: number;
}

const initialState = {
    error: null,
    user: {
        fullstack: null,
        data: null,
        devops: null,
        duty: null,
    },
};
const TechPreferencesSlice = createSlice({
    name: "TechPreferences",
    initialState,
    reducers: {
        first: (state, action) => {
            state.user.fullstack = action.payload;
            console.log(1);
        },
        second: (state, action) => {
            state.user.data = action.payload;
        },
        Third: (state, action) => {
            state.user.devops = action.payload;
        },
        fourth: (state, action) => {
            state.user.duty = action.payload;
        },
    },
});

export const { first, second, Third, fourth } = TechPreferencesSlice.actions;

export default TechPreferencesSlice;
