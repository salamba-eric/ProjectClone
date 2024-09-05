import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/NewProject.css';

function NewProject() {
  const [name, setName] = useState('');
  const [leader, setLeader] = useState('');
  const [progress, setProgress] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ name, leader, progress, createdAt });

    // Redirect back to the projects page or show a success message
    navigate('/dashboard/projects');
  };

  return (
    <div className="new-project">
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Project Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="leader">Project Leader:</label>
          <input
            type="text"
            id="leader"
            value={leader}
            onChange={(e) => setLeader(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="progress">Progress Status:</label>
          <input
            type="text"
            id="progress"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Creation Date:</label>
          <input
            type="date"
            id="createdAt"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            required
          />
        </div>
        <button className='project-buttons' type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default NewProject;
