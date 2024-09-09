import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Sortable from 'sortablejs'; 
import projectsData from '../mock_data/projects.json';

import '../style/project_card.css'; // You can style the tasks here

function ProjectDetails() {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectsData.find(project => project.id === id);

  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' }
  ]);

  const tasksContainerRef = useRef(null);

  // Initialize SortableJS on the tasks container after the component mounts
  useEffect(() => {
    const sortable = Sortable.create(tasksContainerRef.current, {
      animation: 150,
      onEnd: (event) => {
        const updatedTasks = [...tasks];
        
        // Get the task that was moved
        const [movedTask] = updatedTasks.splice(event.oldIndex, 1);
        updatedTasks.splice(event.newIndex, 0, movedTask);

        // Reassign IDs based on the new order
        const reorderedTasks = updatedTasks.map((task, index) => ({
          ...task,
          id: index + 1 // Update ID to reflect the new order (1-based index)
        }));

        setTasks(reorderedTasks); // Update the tasks with new IDs
      }
    });

    // Cleanup sortable instance on component unmount
    return () => {
      sortable.destroy();
    };
  }, [tasks]);


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
    
    <h3>Tasks</h3>
    <div className="tasks-container" ref={tasksContainerRef}>
        {tasks.map((task, index) => (
          <div key={task.id} className="task-item">
            {task.name} (ID: {task.id}) {/* Display ID for clarity */}
          </div>
        ))}
      </div>
    </div>

  );
}

export default ProjectDetails;
