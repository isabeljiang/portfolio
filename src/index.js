import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from "./Hero";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ProjectRow from "./ProjectRow";


const App = () => {
    return (
        <div className="content-container">
            <Navigation className="block"/>
            <Hero className="block" img="Hero-HomePage" text="Isabel is a UI/UX and Product Designer"/>
            <ProjectRow>Hello</ProjectRow>
            <ProjectRow>Hello</ProjectRow>
            <ProjectRow>Hello</ProjectRow>
            <Footer/>
        </div>
    );
};

//Take the react component and show it on the screen 
ReactDOM.render (
    <App />,
    document.querySelector('#root')
);