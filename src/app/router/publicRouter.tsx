import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import FilmsPage from "src/pages/films";

const publicRouter = createBrowserRouter([
  {
    path:'/',
    element: <FilmsPage/>,
  }
])

export {publicRouter};