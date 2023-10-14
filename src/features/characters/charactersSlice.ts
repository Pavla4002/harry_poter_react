import { createSlice } from "@reduxjs/toolkit";
import { charactersAsync } from "src/features/characters/asyncThunk";
import { filmsSlice } from "src/features/films/filmsSlice";


export const charactersSlice = createSlice({
  name: 'characters',
  initialState:{
    characters:[]
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
      .addCase(charactersAsync.fulfilled,(state,action)=>{
        state.characters = action.payload
      })
}
})

export default charactersSlice.reducer;