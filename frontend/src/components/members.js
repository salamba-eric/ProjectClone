// components/members.js
import React from 'react';
import { Outlet } from 'react-router-dom';

function Members() {
  return (
    <div>
      <h1>Meet the team</h1>
      <Outlet /> {/* This will render the nested project routes */}
    </div>
  );
}

export default Members;
