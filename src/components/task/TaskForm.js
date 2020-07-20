//Creating a form for the user to add a new task
//Created by Kelley Crittenden


import React, { useState } from 'react';
import TaskManager from '../../modules/TaskManager';
import './TaskForm.css'


const TaskForm = () => {
  const [task, setTask] = useState({ 
      name: "", 
      dueDate: "", 
      completed: false});

    const [tasks, setTasks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = e => {
    const stateToChange = { ...task };
    stateToChange[e.target.id] = e.target.value;
    setTask(stateToChange);
  };

  const constructNewTask = e => {
    e.preventDefault();
    if (task.name === "" || task.dueDate === "") {
      window.alert("Please input a name and date for this task");
    } else {
      setIsLoading(true);
      TaskManager.post(tasks)
      .then(() => TaskManager.getAll()
      .then(setTasks));
    }
  };


  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">

          <label>Description of Task: </label>

          <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="description of task"
            />


            <label>Complete by: </label>

            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="dueDate"
              placeholder="date to be completed"
            />
          </div>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewTask}
            >Submit</button>

          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskForm