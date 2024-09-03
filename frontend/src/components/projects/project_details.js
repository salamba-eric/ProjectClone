import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../mock_data/projects.json';

import '../style/project_card.css';
function ProjectDetails() {
//simulate the fetching of data from a database
  const { id } = useParams(); // Get the project ID from the URL
//   useEffect(() => {
//     // Simulate fetching project details from a database or API
//     const fetchProject = async () => {
//       // Replace this with your actual fetch request
//       const response = await fetch(`/api/projects/${id}`);
//       const data = await response.json();
//       setProject(data);
//     };

//     fetchProject();
//   }, [id]);

    const project = projectsData.find(project => project.id === id );

  if (!project) {
    return <div className='project-page'>Project not found...</div>;
  }
  else if (project.id == 0){
    return (
        <div className='project-page'> Project creation form </div>
    );
  }
  
  return (
    <div className='project-page'>
      <h2>{project.name}</h2>
      <p><strong>ID:</strong> {project.id}</p>
      <p><strong>Progress:</strong> {project.progress}</p>
      <p><strong>Created At:</strong> {project.createdAt}</p>
      <p><strong>Leader:</strong> {project.leader}</p>
      <p><strong>Description:</strong> {project.description}</p>
      {/* Add any additional project details here */}
    </div>
  );
}

export default ProjectDetails;
