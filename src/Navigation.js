import React from "react";
import './Navigation.css';

//need to change about link url**

const Nav = () => {
    return (
        <div className="navigation">
            <ul>
                <li className="nav-left"><a href="https://isabeljiang.github.io/portfolio/">Isabel Jiang</a></li>
                <li className="nav-right"><a href="https://drive.google.com/file/d/1JexbkGeNOBe6yi5Sts1z3YLKKYEiAbtU/view?usp=sharing">cv</a></li>
                <li className="nav-right"><a href="https://facebook.com">about</a></li> 
                <li className="nav-right"><a href="https://isabeljiang.github.io/portfolio/">work</a></li>
            </ul>
        </div>
    );
};


export default Nav;