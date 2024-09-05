import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Draggable from 'react-draggable'; // Import Draggable component
import projectsData from '../mock_data/projects.json';

import '../style/project_card.css'; // You can style the tasks here

function ProjectDetails() {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectsData.find(project => project.id === id);

  const rowHeight = 60; // Define height of each row (in px)
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', y: 0 },
    { id: 2, name: 'Task 2', y: rowHeight },
    { id: 3, name: 'Task 3', y: rowHeight * 2 }
  ]); // Initial set of tasks, spaced by rowHeight

  if (!project) {
    return <div className='project-page'>Project not found...</div>;
  }

  if (project.id == 0) {
    return (
      <div className='project-page'>Project creation form</div>
    );
  }

  // Snap to nearest row on stop
  const handleDragStop = (e, data, taskId) => {
    // Calculate the nearest row for the task
    const snappedY = Math.round(data.y / rowHeight) * rowHeight;

    // Prevent tasks from overlapping by checking existing positions
    const occupiedRows = tasks
      .filter(task => task.id !== taskId) // Exclude the task being moved
      .map(task => task.y); // Get Y positions of other tasks

    // Find the closest unoccupied row (if snappedY is already occupied)
    let newY = snappedY;
    while (occupiedRows.includes(newY)) {
      newY += rowHeight; // Move to the next row if the current one is occupied
    }

    // Update the task's Y position
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, y: newY }
          : task
      )
    );
  };

  return (
    <div className='project-page'>
      <h2>{project.name}</h2>
      <p><strong>ID:</strong> {project.id}</p>
      <p><strong>Progress:</strong> {project.progress}</p>
      <p><strong>Created At:</strong> {project.createdAt}</p>
      <p><strong>Leader:</strong> {project.leader}</p>
      <p><strong>Description:</strong> {project.description}</p>

      <h3>Tasks</h3>
      <div className="tasks-container" style={{ position: 'relative', height: '300px', border: '1px solid #ddd' }}>
        {tasks.map((task) => (
          <Draggable
            key={task.id}
            axis="y" // Constrain movement to the Y axis
            bounds="parent" // Constrain within the parent element
            position={{ x: 0, y: task.y }} // Initial position of the task
            onStop={(e, data) => handleDragStop(e, data, task.id)} // Handle drag stop
          >
            <div className="task-item" style={{ padding: '10px', backgroundColor: '#f4f4f4', marginBottom: '10px', cursor: 'pointer' }}>
              {task.name}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
