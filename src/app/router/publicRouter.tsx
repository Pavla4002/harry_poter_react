import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import FilmsPage from "src/pages/films";

const publicRouter = createBrowserRouter([
  {
    path:'/',
    element: <FilmsPage/>,
  },
  {
    path:'/pages/film',
    element:<FilmsPage/>,
  }
])

export {publicRouter};