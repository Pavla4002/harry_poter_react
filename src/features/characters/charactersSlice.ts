import { createSlice } from "@reduxjs/toolkit";
import { characterAsync, charactersAsync } from "src/features/characters/asyncThunk";


export const charactersSlice = createSlice({
  name: 'characters',
  initialState:{
    characters:[],
    character: null,
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
      .addCase(charactersAsync.fulfilled,(state,action)=>{
        state.characters = action.payload
      })
      .addCase(characterAsync.fulfilled,(state,action)=>{
        state.character = action.payload
      })
}
})

export default charactersSlice.reducer;