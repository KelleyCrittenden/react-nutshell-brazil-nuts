//Creating a single task card
//Created by Kelley Crittenden


import React from 'react'
import TaskManger from '../../modules/TaskManager';
import './Task.css'

const TaskCard = props => {

  const handleFieldChange = () => {
    TaskManger.completedTask(props.task)
      .then(() => props.getTasks())
  }

  return (
    <>
        {/* Task Cards that have been marked as complete will not be displayed */}
        
    {props.task.completed ? null : 

    <div className="taskCard">

      
      <div className="taskCard-content">

        <h3>To Do: <br></br>
            <span className="card-taskName"> {props.task.name}</span>
        </h3>

        <p>Complete by: {props.task.dueDate}</p>
        <input type="checkbox"
          required
          className="forms-control"
          id="tasks"
          checked={props.task.completed}
          onChange={handleFieldChange}
        />

        <label>Completed</label>
        <button 
            type="button" 
            onClick={() => props.deleteTask(props.task.id)}>
            Delete</button>

        

      </div>
    </div>}
    </>
  )
}

export default TaskCard
