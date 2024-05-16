import React from "react";

const TodoItem = ({id, task, status, toggleStatus}) => {
  return (<div className="item" onClick={() => toggleStatus(id)}>
    <input type="checkbox" checked={status === "completed"}/>
    <span>{task}</span>
  </div>);
}

export default TodoItem;