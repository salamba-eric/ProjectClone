// components/projects.js
import React from 'react';
import { Outlet } from 'react-router-dom';

function Meetings() {
  return (
    <div>
      <h1>Some of the meetings we have</h1>
      <Outlet /> {/* This will render the nested project routes */}
    </div>
  );
}

export default Meetings;
