import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Regi from "./Regi";
import Home from "./Home"
import "./App.css";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Regi />} />
        <Route path="/home" element={<Home/>} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
