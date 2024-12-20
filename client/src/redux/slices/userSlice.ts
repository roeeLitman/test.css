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
        combatPreferences: {
          golani: null,
          armor: null,
          artillery: null,
          searchAndRescue: null
        },
        supportPreferences: {
          targetingNCO: null,
          nimrodiSergeant: null,
          cook: null,
          sandwichFiller: null
        },
        techPreferences: {
          fullstack: null,
          data: null,
          devops: null,
          duty: null,
        },
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
                console.log("/");
                
            }
            console.log(1);
            
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
        techPreferences: (state, action) => {          
             state.user.techPreferences = action.payload  
        },
        personalNote: (state, action) => {          
             state.user.personalNote = action.payload  
                        
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(fetchToServer.pending, (state) => {
                state.error = null;
            })
            .addCase(fetchToServer.fulfilled, (state) => {
                state.error = null;
            })
            .addCase(fetchToServer.rejected, (state, action) => {
                state.error = action.error as string;
            });
    },
});

export default userSlice;
