import './App.css';
import Symptomchecker from '../src/components/Symptomchecker';
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontPage from './components/FrontPage/FrontPage';
import Root from './Root';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <FrontPage />,
        },
        {
          path: "/predictDisease",
          element: <Symptomchecker/>,
        },
      ],
    },
  ]);
   
    return <RouterProvider router={router} />;
}

export default App;
