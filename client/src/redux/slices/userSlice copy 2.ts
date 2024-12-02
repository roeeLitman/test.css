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

interface SupportPreferences {
    targetingNCO: number;
    nimrodiSergeant: number;
    cook: number;
    sandwichFiller: number;
}

interface TechPreferences {
    fullstack: number;
    data: number;
    devops: number;
    duty: number;
}

const initialState = {
    error: null,
    user: {
        name: "",
        personalNote: "",
        combatPreferences: {},
        supportPreferences: {},
        techPreferences: {},
    },
};

export const fetchToServer = createAsyncThunk(
    "military-forms/",
    async (
        user: {
            name: string;
            personalNote: string;
            combatPreferences: CombatPreferences;
            supportPreferences: SupportPreferences;
            techPreferences: TechPreferences;
        },
        thunkApi
    ) => {
        try {
            const res = await fetch(
                `http://localhost:3030/api/military-forms`,
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                }
            );
            if (res.status != 200) {
                thunkApi.rejectWithValue("Can't login, please try again");
            }
            const data = await res.json();
            // thunkApi.fulfillWithValue(data);
            localStorage.setItem("Authorization", data.token);
            return data;
        } catch (err) {
            thunkApi.rejectWithValue("Can't login, please try again");
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        inputname: (state, action) => {          
             state.user.name = action.payload             
        },
        CombatPreferences: (state, action) => {          
             state.user.combatPreferences = action.payload             
        },
        SupportPreferences: (state, action) => {          
             state.user.supportPreferences = action.payload             
        },
        TechPreferences: (state, action) => {          
             state.user.techPreferences = action.payload             
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(fetchToServer.pending, (state) => {
                state.error = null;
                state.user = null;
            })
            .addCase(fetchToServer.fulfilled, (state, action) => {
                state.error = null;
                state.user = action.payload;
            })
            .addCase(fetchToServer.rejected, (state, action) => {
                state.error = action.error as string;
                state.user = null;
            });
    },
});

export default userSlice;
