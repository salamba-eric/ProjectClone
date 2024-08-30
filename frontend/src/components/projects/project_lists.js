import React from 'react';
import ProjectCard from './project_card';


import '../style/project_card.css'
function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          progress={project.progress}
          createdAt={project.createdAt}
          leader={project.leader}
        />
      ))}
    </div>
  );
}

export default ProjectList;
