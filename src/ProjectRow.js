import React from 'react';
import './ProjectRow.css';


function ProjectRow (props) {
    return (
        <div className="projectrow">
            <img src={props.image}></img>
            <div className="left-section">
                <div className="projectTitle">
                    <p className="title1">{props.title}</p>
                    <p className="subtitle">{props.subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectRow;