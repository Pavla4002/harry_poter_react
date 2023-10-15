import {RootState} from "src/app/store";

export const selectCharacters = (state :RootState) =>state.characters.characters;
export const selectCharacter = (state :RootState) =>state.characters.character;
