import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Footer';
import Navigation from './Navigation';

const About = () => {
    return (
        <div className="content-container">
            <Navigation/>
            <Footer/>
        </div>
    ); 
};

ReactDOM.render (
    <About />,
    document.querySelector('#about')
);
