import {createSlice} from "@reduxjs/toolkit";
import {filmsAsync} from "src/features/films/asyncThunk";


export const filmsSlice = createSlice({
    name: "films",
    initialState: {
        items:[],
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
            .addCase(filmsAsync.fulfilled,(state,action)=>{
                state.items = action.payload;
            })

    }
});


export default filmsSlice.reducer;