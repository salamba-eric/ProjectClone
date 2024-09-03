// components/sidebar/projects_sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsSidebar() {
  return (

  <div className='sidebar'>
    <ul>
      <li><Link to="/dashboard/projects/ongoing">Ongoing Projects</Link></li>
      <li><Link to="/dashboard/projects/completed">Completed Projects</Link></li>
      <li><Link to="/dashboard/projects/incomplete">Incomplete Projects</Link></li>
    
      <li><Link to="/dashboard/projects/favorites">Favorite Projects</Link></li>
      <li><Link to="/dashboard/projects/archives">Archived Projects </Link></li>
      <li><Link to="/dashboard/projects/my_projects">My Projects</Link></li>
      <li><Link to="/dashboard/projects/drafts">Drafts</Link></li>
      <li><Link to="/dashboard/projects/gantt-chart">Gantt Chart</Link></li>
      <li><Link to="/dashboard/projects/card-board">Card Board</Link></li>
    </ul>

    <button className='add-button'>
      <Link to="/dashboard/projects/new"> Add Project </Link>
    </button>
  
  </div>
  );
}

export default ProjectsSidebar;
