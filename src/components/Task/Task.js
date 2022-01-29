import React, { useContext } from 'react';
import './Task.css';
import { TaskListContext } from '../../context/TaskListContext';

function Task({ task }) {
  const { removeTask, findTask } = useContext(TaskListContext);
  return (
    <li className="list-item">
      <span className="task-title">{task.title}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>

        <button className="btn-edit task-btn" onClick={() => findTask(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
}

export default Task;
