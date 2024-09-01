import React from "react";
import { Link } from "react-router-dom";

import '../style/project_card.css';

function ProjectCard({id, name, progress, createdAt, leader}){
    return(
        <div className="project-card">
            <div className="project-card-header">
                <h3><Link to= {`/dashboard/projects/${id}`}>{name} </Link></h3>
                <span>ID: {id}</span>
            </div>
            <div className="project-card-body">
                <div className="project-detail">
                    <strong>Progress:</strong> {progress}
                </div>
                <div className="project-detail">
                    <strong>Created At:</strong> {createdAt}
                </div>
                <div className="project-detail">
                    <strong>Leader:</strong> {leader}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;