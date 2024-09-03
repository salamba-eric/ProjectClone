import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import MainLayout from './components/MainLayout';
import Settings from './components/project_settings';
import Account from './components/account_settings';

import Dashboard from './components/dashboard';
import Projects from './components/projects';
import Members from './components/members';
import Meetings from './components/meetings';
import News from './components/news';
import About from './components/about';
import Calender from './components/calender';

import Ongoing from './components/projects/ongoing';
import Completed from './components/projects/complete';
import Incomplete from './components/projects/incomplete';
import Favorites from './components/projects/favorites';
import Archives from './components/projects/archived';
import My_projects  from './components/projects/my_projects';
import Drafts from './components/projects/drafts';
import ProjectDetails from './components/projects/project_details';
import NewProject from './components/projects/new_project';

import Gantt from './components/projects/GanttChart';
import Card from './components/projects/CardBoard';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard/*" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path="ongoing" element={<Ongoing />} />
          <Route path="completed" element={<Completed />} />
          <Route path="incomplete" element={<Incomplete />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="archives" element={<Archives />} />
          <Route path="my_projects" element={<My_projects />} />
          <Route path="drafts" element= {<Drafts /> } />
          <Route path='new' element={<NewProject />} />
          <Route path=":id" element={<ProjectDetails />}  />

          <Route path="gantt-chart" element={<Gantt />} />
          <Route path="card-board" element={<Card />} />
        </Route>
        <Route path="members" element={<Members />} />
        <Route path="news" element={<News />} />
        <Route path="meetings" element={<Meetings />} />
        <Route path="calender" element={<Calender />} />
        <Route path="about" element={<About />} />
        <Route path="account-settings" element={<Account />} />
        <Route path="project-settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
