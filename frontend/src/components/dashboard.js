import React from 'react';
import { Outlet } from 'react-router-dom';

import Card from './public/card';
import './style/Dashboard.css'

function Dashboard() {

  const recentMeetings = ['Meeting 1', 'Meeting 2', 'Meeting 3'];
  const ongoingProjects = ['Project A', 'Project B', 'Project C'];
  const recentUsers = ['User 1', 'User 2', 'User 3'];
  const projectInfo = 'This is information about our project management software.';

  return (
    <div className="dashboard-content">
      {
         <div className="dashboard-grid">
         <Card title="Recently Completed Meetings" link='/dashboard/meetings'>
           <ul>
             {recentMeetings.map((meeting, index) => (
               <li key={index}>{meeting}</li>
             ))}
           </ul>
         </Card>
   
         <Card title="Ongoing Projects" link= '/dashboard/projects/ongoing'>
           <ul>
             {ongoingProjects.map((project, index) => (
               <li key={index}>{project}</li>
             ))}
           </ul>
         </Card>
   
         <Card title="Recently Added Users" link= '/dashboard/members'>
           <ul>
             {recentUsers.map((user, index) => (
               <li key={index}>{user}</li>
             ))}
           </ul>
         </Card>
   
         <Card title="About Our Project" link= '/dashboard/about'>
           <p>{projectInfo}</p>
         </Card>
       </div>
      }
      <Outlet />
    </div>
  );
}

export default Dashboard;
