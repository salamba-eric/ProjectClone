// components/projects.js
import React from 'react';
import { Outlet } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <h1>Some of the projects we have</h1>
      <Outlet /> {/* This will render the nested project routes */}
    </div>
  );
}

export default Projects;
