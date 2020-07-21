//Creating an form for the user to add a new task
//Created by Kelley Crittenden


import React, { useState } from 'react';
import TaskManager from '../../modules/TaskManager';
import './TaskForm.css'

const TaskForm = props => {
  const [task, setTask] = useState({ 
      name: "", 
      dueDate: "", 
      completed: false});
        
    const [isLoading, setIsLoading] = useState(false);

            //setting state for New Task Form
    const [showForm, setShowForm] = useState(false);

    const handleFieldChange = e => {
        const stateToChange = { ...task };
        stateToChange[e.target.id] = e.target.value;
        setTask(stateToChange);
    };

            //click function to show form when new task button is clicked
    const handleClick = e => {
        setShowForm(!showForm)
    }

    const clearTaskForm


    const constructNewTask = e => {
        e.preventDefault();
        if (task.name === "" || task.dueDate === "") {
        window.alert("Please input a name and date for this task");
        } else {
            //clearing input fields once submit button is pushd
          clearTaskForm();
            //hiding Task From when submit button is pushed
          setShowForm(!showForm)
          setIsLoading(true);

        TaskManager.post(task)
        .then(() => {props.getTasks()
        setIsLoading(false)
            });    
        }
    };

  return (
    <>
        <div>
            <button type="button"
                    id="addNewTaskButton"
                    onClick={handleClick}>
                    Add Task
            </button>
        </div>

      <form className= {showForm? "show" : "hidden"}>

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
              //onClick={handleClick}
            >Submit</button>

          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskForm