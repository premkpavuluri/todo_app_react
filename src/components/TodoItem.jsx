import React from "react";
import EditableMessage from "./EditableMessage";
import Indicator from "./Indicator";

const TodoItem = ({id, task, status, toggleStatus, onEdit}) => {
  const updateItem = (text) => {
    onEdit(id, text)
  }

  const onStatusChange = () => {
    toggleStatus(id);
  }

  return (<div className="item">
    <Indicator status={status} onChange={onStatusChange}/>
    <EditableMessage message={task} updateMessage={updateItem}/>
  </div>);
}

export default TodoItem;