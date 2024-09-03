import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import DashSidebar from './sidebar/dashboard_sidebar';
import ProjectsSidebar from './sidebar/projects_sidebar';
import MeetingsSidebar from './sidebar/meetings_sidebar';
import UsersSidebar from './sidebar/users_sidebar';

import './style/MainLayout.css';

function MainLayout() {

  const [isSidebarOpen, setIsidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toogleSidebar = () => {
    setIsidebarOpen(!isSidebarOpen);
  }

  const toogleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  }
  const getSidebar = () => {
    if (location.pathname.startsWith('/dashboard/projects')) {
      return <ProjectsSidebar />;
    }
    else if (location.pathname.startsWith('/dashboard/meetings')){
      return <MeetingsSidebar/> ;
    }
    else if (location.pathname.startsWith('/dashboard/members')){
      return <UsersSidebar />;
    }
    else { 
      return <DashSidebar />; }
  };

  return (
    <div className='main-layout'>

      <nav className='navbar'>
        <div className='sidebar-toogle'>
          <button onClick={toogleSidebar} className='sidebar-toogle-button'>
            {isSidebarOpen ? 'Hide': 'Show'}
          </button>
          <p>Sidebar</p>
        </div>

        <a href='/dashboard'>Dashboard</a>

        <div className='navbar-right'>
          <div className='dropdown'>
            <button onClick={toogleDropdown} className='dropbtn'>
              Settings
            </button>
            {isDropdownOpen && (
              <div className='dropdown-content' onClick={closeDropdown}>
                <Link to='/dashboard/account-settings'>Account Settings</Link>
                <Link to='/dashboard/project-settings'>Project Settings</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className='main-content'>
        {isSidebarOpen && <aside className='sidebar'>{getSidebar()}</aside>}
        <main className={isSidebarOpen ? 'content' : 'content-no-sidebar'}>
          <Outlet />
        </main>
      </div>

    </div>
  );
}

export default MainLayout;
