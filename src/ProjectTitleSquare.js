import React from 'react';
import "./ProjectTitleSquare.css";

function ProjectTitleSquare(props) {
    return (
        <div className="projectTitleSquare">
            <div className="content">
            <p className="title1">{props.title}</p>
            <p className="subtitle">{props.subtitle}</p>
            </div>
        </div>

    );
};

export default ProjectTitleSquare;
