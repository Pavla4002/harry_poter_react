import {$api} from "src/shared/api/swapi";
import { IFilms } from "src/features/films/types";

interface ResponseFilms{
    data:IFilms[];
}

export const filmsAPI = {
    async getFilms(){
       const response =  await $api.get<ResponseFilms>('films');
        return response.data;
    }
}
