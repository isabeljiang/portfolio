import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stitched from './Stitched.png';

import Hero from "./Hero";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ProjectRow from "./ProjectRow";
import ProjectTitleSquare from "./ProjectTitleSquare";



const App = () => {
    return (
        <div className="content-container">
            <Navigation/>
            <Hero img="Hero-HomePage" text="Isabel is a UI/UX and Product Designer"/>
            <ProjectRow image={Stitched}/>
            <Footer/>
        </div>
    );
};

//Take the react component and show it on the screen 
ReactDOM.render (
    <App />,
    document.querySelector('#root')
);