import { $api } from "src/shared/api/swapi";
import { ICharacters } from "src/features/characters/types";

interface ResponseCharacters{
  data:ICharacters[],
}


export const charactersAPI = {
  async getCharacters(){
    const response = await $api.get<ResponseCharacters>('characters');
    return response.data;
  }
}