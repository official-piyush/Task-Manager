import React, { useState, useEffect, createContext } from 'react';

export const TaskListContext = createContext();

function TaskListContextProvider(props) {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function removeTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function clearAllTasks() {
    setTasks([]);
  }

  function findTask(taskId) {
    const toEdit = tasks.find((task) => task.id === taskId);
    setTaskToEdit(toEdit);
  }

  function editTask(newTask) {
    const newTaskList = tasks.map((task) =>
      task.id === newTask.id ? newTask : task
    );
    setTasks(newTaskList);
    setTaskToEdit(null);
  }

  const taskContext = {
    tasks,
    taskToEdit,
    editTask,
    addTask,
    removeTask,
    clearAllTasks,
    findTask,
  };

  return (
    <TaskListContext.Provider value={taskContext}>
      {props.children}
    </TaskListContext.Provider>
  );
}

export default TaskListContextProvider;
