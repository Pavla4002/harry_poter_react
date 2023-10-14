import {createSlice} from "@reduxjs/toolkit";
import { filmAsync, filmsAsync } from "src/features/films/asyncThunk";


export const filmsSlice = createSlice({
    name: "films",
    initialState: {
        items:[],
        film:null,
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
            .addCase(filmsAsync.fulfilled,(state,action)=>{
                state.items = action.payload;
            })
            .addCase(filmAsync.fulfilled,(state,action)=>{
                state.film = action.payload;
            })
    }
});


export default filmsSlice.reducer;