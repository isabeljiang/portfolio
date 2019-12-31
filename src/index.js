import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./Navigation";

const App = () => {
    return (
        <div>
            <Navigation/>
        </div>
    );
};

//Take the react component and show it on the screen 
ReactDOM.render (
    <App />,
    document.querySelector('#root')
);