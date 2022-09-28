//Memory router is good for testing
import { BrowserRouter, HashRouter, Routes, Route, MemoryRouter } from "react-router-dom";
//Lets you use the back and forward arrows, cool 
// import { unstable_HistoryRouter } from "react-router-dom";
import App from "./App";
import React from "react";

//MemoryRouter is used for React testing 

//StaticRouter is used for server side rendering

const RouteSwitch = () => {
  return (
    // <React.StrictMode>

    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </React.StrictMode>
  );
};

export default RouteSwitch;