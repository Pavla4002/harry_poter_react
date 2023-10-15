import { createAsyncThunk } from "@reduxjs/toolkit";
import { charactersAPI } from "src/features/characters/charactersAPI";
import { ICharacters } from "src/features/characters/types";

export const charactersAsync = createAsyncThunk(
  'characters/getCharacters',
  async ()=>{
    const data = await charactersAPI.getCharacters();
    return data;
}
)

export const characterAsync = createAsyncThunk(
  'characters/getCharacter',
  async (characterId : number)=>{
      const data = await charactersAPI.getCharacter(characterId);
      return data;
  }
)