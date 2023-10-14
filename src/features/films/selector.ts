import {RootState} from "src/app/store";

export const selectFilms = (state :RootState) =>state.films.items;
export const selectFilm = (state :RootState) =>state.films.film;