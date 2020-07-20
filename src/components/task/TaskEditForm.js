import React, { useState, useEffect } from "react";
import TaskManger from "../../modules/TaskManager";

const TaskEditForm = props => {
  const [task, setTask] = useState({
    task: "",
    dueDate: "",
    completed: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = e => {
    const stateToChange = { ...task };
    stateToChange[e.target.id] = e.target.value;
    setTask(stateToChange);
  };
  const updateExistingTask = e => {
    e.preventDefault();
    setIsLoading(true);

    const editedTask = {
      id: props.match.params.taskId,
      name: task.name,
      dueDate: task.dueDate,
    };
    TaskManger.update(editedTask)
  };

  useEffect(() => {
    TaskManger.get(props.match.params.id)
        .then(task => {
        setTask(task);
        setIsLoading(false);
    });
  }, [props.match.params.id]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="task">Task: </label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={task.name}
            />
            <label htmlFor="completionDate">Complete by: </label>
            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="dueDate"
              value={task.dueDate}
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingTask}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
export default TaskEditForm;