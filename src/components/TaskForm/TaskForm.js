import React, { useState, useEffect, useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';
import './TaskForm.css';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [errorState, setErrorState] = useState(false);

  const { taskToEdit, editTask, addTask, clearAllTasks } =
    useContext(TaskListContext);

  useEffect(() => {
    if (taskToEdit !== null) {
      setTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  function handleChange(event) {
    setTitle(event.target.value);
    setErrorState(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // add new task
    if (taskToEdit === null) {
      if (title.trim().length > 0) {
        const newTask = {
          id: Date.now().toString(),
          title,
        };

        addTask(newTask);
        setTitle('');
      } else {
        setErrorState(true);
        return;
      }
    }
    // edit existing task
    else {
      if (title.trim().length > 0) {
        const newTask = {
          id: taskToEdit.id,
          title,
        };

        editTask(newTask);
        setTitle('');
      } else {
        setErrorState(true);
        return;
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Add Task..."
        autoComplete="off"
        spellCheck="false"
        className={`task-input ${errorState && 'error-field'}`}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {taskToEdit ? 'Edit Task' : 'Add Task'}
        </button>

        <button
          className="btn clear-btn"
          type="button"
          onClick={() => clearAllTasks()}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
