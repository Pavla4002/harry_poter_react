import {$api} from "src/shared/api/swapi";
import { QueryParamsForSearchFilms, ResponseFilm, ResponseFilms } from "src/features/films/types";


export const filmsAPI = {
    async getFilms(queryParams : QueryParamsForSearchFilms){
      const params = new URLSearchParams(queryParams as URLSearchParams);
       const response =  await $api.get<ResponseFilms>('films',{params});
       return response.data;
    },
  async getFilmInfo(filmId : number){
    const response =  await $api.get<ResponseFilm>(`films/${filmId}`);
    return response.data;
  },
}


