import { createBrowserRouter } from "react-router-dom";
import FilmsPage from "src/pages/films";
import FilmPage from "src/pages/film";
import MainPage from "src/pages/main";
import CharactersPage from "src/pages/characters";
import CharacterPage from "src/pages/character";

const publicRouter= createBrowserRouter([
  {
    path:'/harry_poter_react',
    element: <MainPage/>,
    children:[
      {
        index:true,
        element: <FilmsPage/>,
      },
      {
        path:'pages/film/:filmId',
        element:<FilmPage/>,
      },
      {
        path:'pages/characters',
        element:<CharactersPage/>,
      },
      {
        path:'pages/character/:characterId',
        element:<CharacterPage/>,
      }
    ]
  }
])

export {publicRouter};