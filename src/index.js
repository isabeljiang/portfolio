import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./Navigation";
import Hero from "./Hero";


const App = () => {
    return (
        <div className="full-page-width">
            <div className="center-content-container">
                <div className="content-container">
                    <Navigation className="block"/>
                    <Hero className="block" img="Hero-HomePage" text="Isabel is a UI/UX and Product Designer"/>
                </div>
            </div>
        </div>
    );
};

//Take the react component and show it on the screen 
ReactDOM.render (
    <App />,
    document.querySelector('#root')
);