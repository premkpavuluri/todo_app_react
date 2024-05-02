import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (<div className="todo-layout">
    <h1>Todo</h1>
    <ul>
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
  </div>);
}

export default Todo;