import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filmAsync, filmsAsync } from "src/features/films/asyncThunk";
import { IFilms } from "src/features/films/types";
import { ICharacters } from "src/features/characters/types";


interface FilmsStore{
    items:IFilms[],
    film:null | IFilms,
}

const initialState: FilmsStore ={
    items:[],
    film:null,
}

export const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers:{

    },
    extraReducers:{
            [filmsAsync.fulfilled.type]:(state,{payload}: PayloadAction<IFilms[]>)=>{
                state.items = payload;
            },
           [filmAsync.fulfilled.type]:(state,{payload}: PayloadAction<IFilms>)=>{
                state.film = payload;
            }
    }
});


export default filmsSlice.reducer;