import React from 'react';
import { Link } from 'react-router-dom';

function DashSidebar() {
  return (
    <ul>
      <li><Link to="/dashboard/projects">Projects</Link></li>
      <li><Link to="/dashboard/members">Members</Link></li>
      <li><Link to="/dashboard/meetings">Meetings</Link></li>
      <li><Link to="/dashboard/news">News</Link></li>
      <li><Link to="/dashboard/calender">Calender</Link></li>
      <li><Link to="/dashboard/about">About</Link></li>
    </ul>
  );
}

export default DashSidebar;
