import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Draggable from 'react-draggable'; // Import Draggable component
import projectsData from '../mock_data/projects.json';

import '../style/project_card.css'; // You can style the tasks here

function ProjectDetails() {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectsData.find(project => project.id === id);

  const rowHeight = 50; // Define height of each row (in px)
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', y: 0 },
    { id: 2, name: 'Task 2', y: rowHeight },
    { id: 3, name: 'Task 3', y: rowHeight * 2 }
  ]); // Initial set of tasks, spaced by rowHeight

  if (!project) {
    return (
    <div className='project-page'>
      <h2 className="project-name">Project not found...</h2> 
    </div>
    );
  }

  if (project.id == 0) {
    return (
      <div className='project-page'>
        <h2 className="project-name">Project creation form</h2>
      </div>
    );
  }

  const calculateYPosition = (index) => {
    return index * rowHeight;
  }
  
  const handleDragStop = (e, data, taskId) => {
    // find the dragged task
    const draggedTask = tasks.find(task => task.id === taskId);
    // which row the dragged task was dropped
    const newY = data.y;
    const newPosition = Math.round(newY /rowHeight);
    //
    const reorderedTasks = tasks.map(task => {
      if (task.id === taskId){
        return { ...task, index: newPosition};
      } else if (task.index >= newPosition && task.index < draggedTask.index) {
        // Move tasks down to make room for the dragged task if it's moving up
        return { ...task, index: task.index + 1 };
      } else if (task.index <= newPosition && task.index > draggedTask.index) {
        // Move tasks up to make room for the dragged task if it's moving down
        return { ...task, index: task.index - 1 };
      } else {
        // No change for tasks not affected
        return task;
      }
    });

  // After updating the indices, we re-calculate the Y positions
  setTasks(
    reorderedTasks.map(task => ({
      ...task,
      y: calculateYPosition(task.index)
    }))
  );
  };


  return (
    <div className="project-page">
  <h2 className="project-name">{project.name}</h2>
  
  <div className="project-details">
    <p className="project-detail">
      <strong>ID:</strong> {project.id}
    </p>
    <p className="project-detail">
      <strong>Progress:</strong> {project.progress}%
    </p>
    <p className="project-detail">
      <strong>Created At:</strong> {project.createdAt}
    </p>
    <p className="project-detail">
      <strong>Leader:</strong> {project.leader}
    </p>
  </div>
  
  <div className="progress-container">
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ '--progress': Number(project.progress) / 100 }}></div>
    </div>
  </div>
  
  <p className="project-description">
    <strong>Description:</strong> {project.description}
  </p>
  
  <h3 className='project-name'>Tasks</h3>
  <div className="tasks-container">
  {tasks.map((task) => (
          <Draggable
            key={task.id}
            axis="y" // Constrain movement to the Y axis
            bounds="parent" // Constrain within the parent element
            position={{ x: 0, y: task.y }} // Use the Y position based on the task index
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
