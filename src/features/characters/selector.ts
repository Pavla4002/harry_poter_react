import {RootState} from "src/app/store";

export const selectCharacters = (state :RootState) =>state.characters.characters;
