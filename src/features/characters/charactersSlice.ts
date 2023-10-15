import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { characterAsync, charactersAsync } from "src/features/characters/asyncThunk";
import { ICharacters } from "src/features/characters/types";


interface CharactersStore{
  characters: ICharacters[],
  character: null | ICharacters,
}

const initialState: CharactersStore= {
  characters:[],
  character: null,
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers:{

  },
  extraReducers:{
  [charactersAsync.fulfilled.type]:(state:CharactersStore,{payload}: PayloadAction<ICharacters[]>)=>{
        state.characters = payload
      },
  [characterAsync.fulfilled.type]:(state:CharactersStore,{payload}:PayloadAction<ICharacters>)=>{
        state.character = payload
      }
}
})

export default charactersSlice.reducer;