import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import ElementDetails from './Pages/ElementDetails/ElementDetails';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./const/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.element,
    element: <ElementDetails />,
  },
]);


function App() {
    return (
        
            <div className="App">
                <header className="App-header">
                <RouterProvider router={router} />
                </header>
            </div>
        
    );
}

export default App;
