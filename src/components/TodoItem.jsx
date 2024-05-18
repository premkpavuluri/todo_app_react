import React from "react";
import EditableMessage from "./EditableMessage";

const TodoItem = ({id, task, status, toggleStatus, onEdit}) => {
  const isChecked = () => {
    return status === "completed";
  }

  const updateItem = (text) => {
    onEdit(id, text)
  }

  return (<div className="item">
    <input type="checkbox" onChange={() => toggleStatus(id)} checked={isChecked()}/>
    <EditableMessage message={task} updateMessage={updateItem}/>
  </div>);
}

export default TodoItem;