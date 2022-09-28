require('file-loader?name=[name].[ext]!./index.html')

import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./components/RouteSwitch";
import './styles/App.scss'
import './styles/Cat.scss'
const appElement = document.getElementById('app');
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <div>
        <RouteSwitch />
    </div> 
)