import {createAsyncThunk} from "@reduxjs/toolkit";
import { filmsAPI} from "src/features/films/filmsAPI";
import { IFilms, QueryParamsForSearchFilms } from "src/features/films/types";


export const filmsAsync = createAsyncThunk(
    'films/getFilms',
    async (params:QueryParamsForSearchFilms) => {
        const data  = await filmsAPI.getFilms(params);
        return data;
    }
);

export const filmAsync = createAsyncThunk(
    'films/getFilmInfo',
    async(filmId:number)=>{
      const data = await  filmsAPI.getFilmInfo(filmId);
      return data;
    }
)
