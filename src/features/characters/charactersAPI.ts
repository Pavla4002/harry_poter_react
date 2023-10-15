import { $api } from "src/shared/api/swapi";
import { ICharacters } from "src/features/characters/types";

interface ResponseCharacters{
  data:ICharacters[],
}
interface ResponseCharacter{
  data:ICharacters,
}

export const charactersAPI = {
  async getCharacters(){
    const response = await $api.get<ResponseCharacters>('characters');
    return response.data;
  },
  async getCharacter(characterId:number){
    const response = await $api.get<ResponseCharacter>(`characters/${characterId}`);
    return response.data;
  }
}