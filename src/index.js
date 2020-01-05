import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Stitched from './Stitched.png';
import Scoots from './Scoots.png';

import Hero from "./Hero";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ProjectRow from "./ProjectRow";




const App = () => {
    return (
        <div className="content-container">
            <Navigation/>
            <Hero 
                img="Hero-HomePage" 
                text="Isabel is a UI/UX and Product Designer."/>
            <ProjectRow 
                title="stitched"
                subtitle="a web browser plug-in for organizing events on campus" 
                image={Stitched}/>

            <ProjectRow 
                title="scoots" 
                subtitle="a plant-based footwear startup" 
                image={Scoots}/>
        </div>
    );
};

//Take the react component and show it on the screen 
ReactDOM.render (
    <App />,
    document.querySelector('#root')
);