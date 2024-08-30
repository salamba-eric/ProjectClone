// src/components/OngoingProjects.js
import React from 'react';
import ProjectList from './project_lists';

function Ongoing() {
  const ongoingProjects = [
    { id: '1', name: 'Project Alpha', progress: '50%', createdAt: '2024-01-01', leader: 'John Doe' },
    { id: '2', name: 'Project Beta', progress: '70%', createdAt: '2024-02-01', leader: 'Jane Smith' },
    { id: '3', name: 'Project Gamma', progress: '90%', createdAt: '2024-03-01', leader: 'Alice Johnson' },
  ];

  return (
    <div>
      <h2>Ongoing Projects</h2>
      <ProjectList projects={ongoingProjects} />
    </div>
  );
}

export default Ongoing;