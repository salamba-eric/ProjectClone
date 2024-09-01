// src/components/OngoingProjects.js
import React from 'react';
import ProjectList from './project_lists';
import projectsData from '../mock_data/projects.json';

function Ongoing() {
  const ongoingProjects = projectsData.filter(project => project.progress !== '100%');

  return (
    <div>
      <h2>Ongoing Projects</h2>
      <ProjectList projects={ongoingProjects} />
    </div>
  );
}

export default Ongoing;