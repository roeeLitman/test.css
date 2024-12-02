import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";

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
        golani: (state, action) => {
            state.user.golani = action.payload;
        },
        armor: (state, action) => {
            state.user.armor = action.payload;
        },
        artillery: (state, action) => {
            state.user.artillery = action.payload;
        },
        searchAndRescue: (state, action) => {
            state.user.searchAndRescue = action.payload;
        },
    },
});

export default CombatPreferencesSlice;
