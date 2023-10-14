import { createBrowserRouter } from "react-router-dom";
import FilmsPage from "src/pages/films";
import FilmPage from "src/pages/film";
import MainPage from "src/pages/main";
import CharactersPage from "src/pages/characters";

const publicRouter= createBrowserRouter([
  {
    path:'/',
    element: <MainPage/>,
    children:[
      {
        index:true,
        element: <FilmsPage/>,
      },
      {
        path:'/pages/film/:filmId',
        element:<FilmPage/>,
      },
      {
        path:'/pages/characters',
        element:<CharactersPage/>,
      }
    ]
  }

])

export {publicRouter};