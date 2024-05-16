import React from "react";

const TodoItem = ({task, status}) => {
  console.log("task:status", status);
  return (<div className="item">
    <input type="checkbox" checked={status === "completed"}/>
    <span>{task}</span>
  </div>);
}

export default TodoItem;