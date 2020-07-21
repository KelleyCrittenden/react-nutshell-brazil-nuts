//Main Task Page that displays all the task cards

import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import TaskManager from '../../modules/TaskManager';
import TaskForm from "./TaskForm"


const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    return TaskManager.getAll().then(tasksFromAPI => {
      setTasks(tasksFromAPI);
    });
  };

    const deleteTask = (id) => {
        TaskManager.delete(id)
        .then(() => TaskManager.getAll()
        .then(setTasks));
    };

    useEffect(() => {
        getTasks();
    }, []);

    return(
        <>

        <TaskForm 
            getTasks={getTasks} />

        <div 
            className="container-cards">
            {tasks.map(task => <TaskCard 
                                key={task.id} 
                                task={task}
                                deleteTask={deleteTask}
                                getTasks={getTasks}
                                {...props}/>
          )}
        </div>

        </>
      );
    };
export default TaskList