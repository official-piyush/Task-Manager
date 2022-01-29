import React from 'react';
import TaskListContextProvider from './context/TaskListContext';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';

import './App.css';

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
