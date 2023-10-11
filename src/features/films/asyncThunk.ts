import {createAsyncThunk} from "@reduxjs/toolkit";
import { filmsAPI} from "src/features/films/filmsAPI";
import { IFilms } from "src/features/films/types";


export const filmsAsync = createAsyncThunk(
    'films/getFilms',
    async () => {
        const data  = await filmsAPI.getFilms<IFilms[]>();
        return data;
    }
);

