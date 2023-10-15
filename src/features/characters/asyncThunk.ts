import { createAsyncThunk } from "@reduxjs/toolkit";
import { charactersAPI } from "src/features/characters/charactersAPI";
import { ICharacters } from "src/features/characters/types";

export const charactersAsync = createAsyncThunk(
  'characters/getCharacters',
  async ()=>{
    const data = await charactersAPI.getCharacters<ICharacters[]>();
    return data;
}
)

export const characterAsync = createAsyncThunk(
  'characters/getCharacter',
  async (characterId : number)=>{
      const data = await charactersAPI.getCharacter<ICharacters>(characterId);
      return data;
  }
)