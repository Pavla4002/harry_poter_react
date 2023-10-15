
export interface IFilms{
    id: number,
    title_rus: string,
    title_eng: string,
    director: string,
    release:string ,
    description:string,
    genre:string ,
    duration: string,
    authorMusic: string,
    coverImg:string ,
    numberPartFilm: number
}


export interface ResponseFilms{
    data:IFilms[];
}

export interface ResponseFilm{
    data:IFilms;
}

export interface QueryParamsForSearchFilms{
    title?:string
}