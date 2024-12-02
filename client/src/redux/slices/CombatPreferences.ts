import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface CombatPreferences {
    golani: number;
    armor: number;
    artillery: number;
    searchAndRescue: number;
}

const initialState = {
    error: null,
    user: {
        golani: null,
        armor: null,
        artillery: null,
        searchAndRescue: null
    }
};
const CombatPreferencesSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        first: (state, action) => {
            state.user.golani = action.payload;
            console.log(1);
            
        },
        second: (state, action) => {
            state.user.armor = action.payload;
        },
        Third: (state, action) => {
            state.user.artillery = action.payload;
        },
        fourth: (state, action) => {
            state.user.searchAndRescue = action.payload;
        },
    },
});

export const { first, second, Third, fourth } = CombatPreferencesSlice.actions;


export default CombatPreferencesSlice;
