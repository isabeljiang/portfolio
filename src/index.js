import React from "react";
import ReactDOM from "react-dom";
import './index.css';

import Navigation from "./Navigation";


const App = () => {
    return (
        <div className="container">
            <Navigation/>
        </div>
    );
};

//Take the react component and show it on the screen 
ReactDOM.render (
    <App />,
    document.querySelector('#root')
);