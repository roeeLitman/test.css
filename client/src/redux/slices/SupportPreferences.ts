import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";



interface SupportPreferences {
    targetingNCO: number;
    nimrodiSergeant: number;
    cook: number;
    sandwichFiller: number;
}


const initialState = {
    error: null,
    user: {
        targetingNCO: null,
        nimrodiSergeant: null,
        cook: null,
        sandwichFiller: null
    },
};



const SupportPreferencesSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        first: (state, action) => {
            state.user.targetingNCO = action.payload;
            console.log(1);
            
        },
        second: (state, action) => {
            state.user.nimrodiSergeant = action.payload;
        },
        Third: (state, action) => {
            state.user.cook = action.payload;
        },
        fourth: (state, action) => {
            state.user.sandwichFiller = action.payload;
        },
    },
});

export default SupportPreferencesSlice;
