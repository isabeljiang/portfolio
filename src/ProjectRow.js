import React from 'react';
import './ProjectRow.css';

import ProjectTitleSquare from "./ProjectTitleSquare";

function ProjectRow (props) {
    return (
        <div className="projectrow">
            <img src={props.image}></img>
        </div>
    )
}

export default ProjectRow;