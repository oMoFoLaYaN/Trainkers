import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Shop from './Shop'
import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './components'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
    {
      path: "/shop",
      element: <Shop />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
