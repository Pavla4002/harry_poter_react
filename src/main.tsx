import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {RouterProvider} from 'react-router-dom';
import { publicRouter } from "src/app/router/publicRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={publicRouter}/>
    </Provider>
  </React.StrictMode>,
)
