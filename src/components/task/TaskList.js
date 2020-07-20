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
        .then(() => TaskManager.getAll().then(setTasks));
    };

    useEffect(() => {
        getTasks();
    }, []);

    return(
        <>
        
        <TaskForm />

        <section className="section-content">
            <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/tasks/addtask") }}>
                    Add New Task
            </button>
        </section>

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