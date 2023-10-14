import { createBrowserRouter } from "react-router-dom";
import FilmsPage from "src/pages/films";
import FilmPage from "src/pages/film";

const publicRouter = createBrowserRouter([
  {
    path:'/',
    element: <FilmsPage/>,
  },
  {
    path:'/pages/film/:filmId',
    element:<FilmPage/>,
  }
])

export {publicRouter};