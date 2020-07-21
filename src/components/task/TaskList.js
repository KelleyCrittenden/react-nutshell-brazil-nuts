//Main Task Page that displays all the task cards
//Created by Kelley Crittenden

import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import TaskManager from '../../modules/TaskManager';
import TaskForm from "./TaskForm"

    //Setting state as initial empty array
const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

    //getting all the Tasks from the API
  const getTasks = () => {
      //using setTasks to update state with database information
    return TaskManager.getAll().then(tasksFromAPI => {
      setTasks(tasksFromAPI);
    });
  };
        //function to delete Task from API
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
            {/* new task form, hidden */}
        <TaskForm 
            getTasks={getTasks} />

        <div 
            //mapping over tasks to show a list all the tasks in the database
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